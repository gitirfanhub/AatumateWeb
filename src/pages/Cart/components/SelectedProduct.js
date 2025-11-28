import React from "react";
import styled from "styled-components";
import { totalActualPrice, totalSalePrice } from "../../../utils/utilsfunction";
import { Link } from "react-router-dom";

const SelectedProductStyles = styled.section`
  .product-details {
    padding: 0 10px;
    h4 {
      font: ${({ theme }) => theme.fontAppearance.commonSize};
      color: #202020;
    }
    .price-details {
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        p {
          font: ${({ theme }) => theme.fontAppearance.contentLight};
        }
      }
    }
  }

  .addToCart__btn {
    display: inline-block;
    width: 100%;
    text-decoration: none;
  }
`;

const SelectedProduct = ({ product }) => {
  console.log(product);

  const salePrice = product?.productMerchantBike
    ? product?.productMerchantBike.imateDiscountPrice === 0
      ? parseFloat(product?.productMerchantBike.imateDiscountPrice).toFixed(2)
      : parseFloat(
          product?.productMerchantBike.currentSalePrice -
            product?.productMerchantBike.imateDiscountPrice
        ).toFixed(2)
    : product?.productMerchantLmv?.imateDiscountPrice === 0
    ? parseFloat(product?.productMerchantLmv?.imateDiscountPrice).toFixed(2)
    : parseFloat(
        product?.productMerchantLmv.currentSalePrice -
          product?.productMerchantLmv?.imateDiscountPrice
      ).toFixed(2);

  const merchantDiscount = product?.productMerchantBike
    ? product?.productMerchantBike.merchantSalePrice === 0
      ? parseFloat(product?.productMerchantBike.merchantSalePrice).toFixed(2)
      : parseFloat(
          product?.productMerchantBike.currentSalePrice -
            product?.productMerchantBike.merchantSalePrice
        ).toFixed(2)
    : product?.productMerchantLmv?.merchantSalePrice === 0
    ? parseFloat(product?.productMerchantLmv?.merchantSalePrice).toFixed(2)
    : parseFloat(
        product?.productMerchantLmv.currentSalePrice -
          product?.productMerchantLmv?.merchantSalePrice
      ).toFixed(2);

  console.log(
    totalActualPrice(product) -
      (totalActualPrice(product) - totalSalePrice(product)) -
      (Number(merchantDiscount) === 0 ? salePrice : merchantDiscount)
  );
  return (
    <SelectedProductStyles>
      <div className="product-details">
        <h4>Price Details</h4>
        <div className="price-details">
          <div className="price">
            <p>Amount MRP</p>
            <p>INR {totalActualPrice(product)?.toFixed(2)}</p>
          </div>
          <div className="price">
            <p>Discount MRP</p>
            <p>
              INR{" "}
              {(totalActualPrice(product) - totalSalePrice(product)).toFixed(2)}
            </p>
          </div>
          {Number(merchantDiscount) === 0 ? (
            <div className="price">
              <p>Aatumate Discount</p>
              <p>INR {parseFloat(salePrice).toFixed(2)}</p>
            </div>
          ) : null}
          <div className="price">
            <p>Merchant Discount</p>
            <p>INR {parseFloat(merchantDiscount).toFixed(2)}</p>
          </div>
          <hr />
          <div className="price">
            <h4>Total Amount</h4>
            <h4>
              MRP{" "}
              {(
                totalActualPrice(product) -
                (totalActualPrice(product) - totalSalePrice(product)) -
                (Number(merchantDiscount) === 0 ? salePrice : merchantDiscount)
              ).toFixed(2)}
            </h4>
          </div>
        </div>
        <Link
          className="addToCart__btn"
          to="/checkout"
          state={{
            product,
            salePrice: salePrice,
            merchantDiscount: merchantDiscount
          }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </SelectedProductStyles>
  );
};

export default SelectedProduct;
