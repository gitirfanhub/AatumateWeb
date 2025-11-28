import React from "react";
import styled from "styled-components";
import Rating from "../../HomePage/components/Rating";
import CustomerCard from "../../../components/CustomerCard";
import { avgRatings, calcOffer } from "../../../utils/utilsfunction";
import { useCartContext } from "../../../context/cart_context";
import { useBrandsContext } from "../../../context/brands_context";
import { Link } from "react-router-dom";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import { RiCouponFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

const ProductInfoStyleWrapper = styled.section`
  margin-left: 2rem;
  .product-info {
    .product-name {
      font: ${({ theme }) => theme.fontAppearance.titleBold};
      margin-bottom: 0.5rem;
    }
    .merchant-name {
      font: ${({ theme }) => theme.fontAppearance.commonSize};
      color: ${({ theme }) => theme.colors.tertiary};
      margin-bottom: 0.5rem;
    }
    .price {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 0.5rem;
      .sale-price {
        font: ${({ theme }) => theme.fontAppearance.titleBold};
        color: ${({ theme }) => theme.colors.primary};
      }
      .actual-price {
        font: ${({ theme }) => theme.fontAppearance.commonSize};
        color: ${({ theme }) => theme.colors.tertiary};
        text-decoration: line-through;
        /* padding-left: 1rem; */
      }
      .discount {
        font: ${({ theme }) => theme.fontAppearance.commonSize};
        color: ${({ theme }) => theme.colors.tertiary};
        text-decoration: none;
      }
    }
    .category {
      background-color: ${({ theme }) => theme.colors.backgroundGrey};
      color: ${({ theme }) => theme.colors.tertiary};
      padding: 0.5rem 0;
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
      margin: 1rem 0;
      span {
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .quantity {
      margin-bottom: 1rem;
      .cart-btn {
        padding: 0.5rem 1rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
        margin-top: 1rem;
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        outline: none;
        border: none;
        cursor: pointer;
      }
      a {
        text-decoration: none;
      }
    }
    .description {
      margin-top: 0.5rem;
      .title {
        font: ${({ theme }) => theme.fontAppearance.commonSize};
        margin-bottom: 0.5rem;
      }
      .text {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        padding-top: 0.5rem;
      }
      p,
      li {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        line-height: 1.3;
      }
      ul {
        padding: 0;
        margin: 0;
        li {
          list-style-type: none;
        }
      }
    }
    .quotes {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 2rem;
      margin-top: 1rem;
      p {
        flex: none;
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        line-height: 2;
        svg {
          fill: #9aef6c;
        }
      }
    }
    .customer-reviews {
      margin: 1rem 0;
      .reviews {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 1rem;
        overflow-x: auto;
        overflow-y: hidden;
        ::-webkit-scrollbar {
          display: none;
        }
      }
      h5 {
        font: ${({ theme }) => theme.fontAppearance.commonSize};
      }
    }
  }
  @media only screen and (max-width: 992px) {
    margin-left: 0;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 576px) {
    .product-info {
      .product-name {
        font: ${({ theme }) => theme.fontAppearance.commonSize};
      }
      .merchant-name {
        font: ${({ theme }) => theme.fontAppearance.defaultBold};
      }
      .price {
        .sale-price {
          font: ${({ theme }) => theme.fontAppearance.contentMedium};
        }
        .actual-price,
        .discount {
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        }
      }
      .category {
        font: ${({ theme }) => theme.fontAppearance.defaultMedium};
      }
      .description {
        p,
        li,
        .text {
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        }
      }
    }
  }
`;

const ProductInfo = ({ product, selectedAddons }) => {
  console.log(product);
  const { addToCart } = useCartContext();

  const { customer_vehicle } = useBrandsContext();

  const selectedVehicle = customer_vehicle.find((item) => item.isSelected);

  const reviews = product.lmvOrderReviews || product.bikeOrderReviews || [];

  const customerId = JSON.parse(localStorage.getItem("user_detail"));
  const token = localStorage.getItem("jwt_token");

  console.log(product);

  const postAddToCart = () => {
    if (product.product.subcategory.vehicleType === "LMV") {
      const data = {
        customer: customerId._id,
        customerCar: selectedVehicle._id,
        productMerchantLmv: product._id,
        addOns: selectedAddons,
        vehicleType: product.product.subcategory.vehicleType,
        merchantType: product.product.subcategory.merchantType
      };
      addToCart("add-to-cart", data);
    } else if (product.product.subcategory.vehicleType === "Bike") {
      const data = {
        customer: customerId._id,
        customerCar: selectedVehicle._id,
        productMerchantBike: product._id,
        addOnsbike: selectedAddons,
        vehicleType: product.product.subcategory.vehicleType,
        merchantType: product.product.subcategory.vehicleType
      };
      addToCart("add-to-cart", data);
    }
  };

  console.log(reviews);

  return (
    <ProductInfoStyleWrapper>
      <div className="product-info">
        <h2 className="product-name">{product?.product?.productName}</h2>
        <h3 className="merchant-name">{product?.merchantId?.businessName}</h3>
        <Rating stars={avgRatings(reviews)} reviews={reviews.length} />
        <div className="price">
          {product.merchantSalePrice !== 0 ? (
            <h4 className="sale-price">
              INR {parseFloat(product.merchantSalePrice).toFixed(2)}
            </h4>
          ) : product.imateDiscountPrice !== 0 ? (
            <h4 className="sale-price">
              INR {parseFloat(product.imateDiscountPrice).toFixed(2)}
            </h4>
          ) : null}
          <h4
            className={
              product.merchantSalePrice === 0 &&
              product.imateDiscountPrice === 0
                ? "sale-price"
                : "actual-price"
            }
          >
            INR {parseFloat(product?.currentSalePrice).toFixed(2)}
          </h4>
          <h6 className="actual-price">
            INR {parseFloat(product?.currentActualPrice).toFixed(2)}
          </h6>
          <span className="discount">
            (
            {calcOffer(
              product?.currentActualPrice,
              product.merchantSalePrice !== 0
                ? product?.merchantSalePrice
                : product.imateDiscountPrice !== 0
                ? product.imateDiscountPrice
                : product.currentSalePrice
            )}
            % OFF)
          </span>
        </div>
        <div className="category">
          Category:{" "}
          <span>{product?.product?.subcategory?.category.categoryName}</span>
        </div>
        <div className="quantity">
          <Link
            to={token ? "/cart" : "/login"}
            className="cart-btn"
            onClick={() => postAddToCart()}
          >
            ADD TO CART
          </Link>
        </div>
        <div className="description">
          <h5 className="title">Product Description : </h5>
          <div
            dangerouslySetInnerHTML={{ __html: product?.product?.productDesc }}
          ></div>
          <div className="text">{product?.productDesc}</div>
        </div>
        <div className="quotes">
          <p>
            <BsShieldFillCheck /> Use our Secured App
          </p>
          <p>
            <FaTag /> Get Warrenty on each services
          </p>
          <p>
            <RiCouponFill /> Use your coupen code to get discount
          </p>
          <p>
            <AiFillSetting /> Get Free service on product
          </p>
        </div>
        {reviews.length >= 1 && (
          <div className="customer-reviews">
            <h5>Customer Reviews</h5>
            <div className="reviews">
              {reviews?.map((review, index) => {
                return (
                  <CustomerCard
                    key={index}
                    review={review}
                    vehicleType={product.product.subcategory.vehicleType}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </ProductInfoStyleWrapper>
  );
};

export default ProductInfo;
