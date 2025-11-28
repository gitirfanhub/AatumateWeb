import React, { useState } from "react";
import CartStyleWrapper from "./CartStyles";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
import { AiFillCheckSquare } from "react-icons/ai";
import { Radio } from "@mui/material";
import { useCartContext } from "../../context/cart_context";
import { baseUrl } from "../../utils/constants";
import SelectedProduct from "./components/SelectedProduct";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import { RiCouponFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import EmptyCartJson from "../../json/Empty_Cart.json";
import defaultImage from "../../images/Aatumate_Icon_Grey.svg";

const Cart = () => {
  const { cart, deleteFromCart } = useCartContext();
  const [selectedValue, setSelectedValue] = useState(cart[0]);

  const customerDetails = JSON.parse(localStorage.getItem("user_detail"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyCartJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <CartStyleWrapper>
      <div className="breadcrumb">
        <Breadcrumb title="Cart" />
      </div>
      <div className="cart-section">
        {cart.length === 0 ? (
          <>
            <h5 className="text-center">Your cart is empty...</h5>
            <div className="link-btn">
              <Link to="/" className="addToCart__btn">
                Add Products
              </Link>
            </div>
            <div className="empty-cart">
              {/* <Lottie options={defaultOptions} />/ */}
            </div>
          </>
        ) : (
          <div className="cart-container">
            <div className="cart">
              <div className="address-box">
                <p className="address">
                  Deliver to:{" "}
                  <strong>
                    {customerDetails.fullName}, {customerDetails.postCode}
                  </strong>
                  <br />
                  <span>
                    {customerDetails.addressLine1}{" "}
                    {customerDetails.addressLine2}
                  </span>
                </p>
              </div>
              {cart.map((item, index) => (
                <div className="cart-card" key={index}>
                  <div className="product-image">
                    {item.productMerchantBike ? (
                      <img
                        src={`${baseUrl}/productServerImage/${item?.productMerchantBike?.product.productImage[0]}`}
                        alt={`${item?.productMerchantBike?.product.productName}`}
                        onError={(event) => {
                          event.target.src = `${defaultImage}`;
                          event.onerror = null;
                        }}
                      />
                    ) : (
                      <img
                        src={`${baseUrl}/productServerImage/${item?.productMerchantLmv?.product.productImage[0]}`}
                        alt={`${item?.productMerchantLmv?.product.productName}`}
                        onError={(event) => {
                          event.target.src = `${defaultImage}`;
                          event.onerror = null;
                        }}
                      />
                    )}
                    <Radio
                      value={selectedValue}
                      checked={selectedValue === item}
                      onChange={() => setSelectedValue(item)}
                      name="cart"
                      icon={<MdCropSquare />}
                      checkedIcon={<AiFillCheckSquare />}
                    />
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">
                      {item.productMerchantBike
                        ? item.productMerchantBike?.product.productName
                        : item.productMerchantLmv?.product.productName}
                    </h4>
                    <div className="price-details">
                      {item.productMerchantBike ? (
                        item.productMerchantBike?.merchantSalePrice !== 0 ? (
                          <h3>
                            INR{" "}
                            {parseFloat(
                              item.productMerchantBike?.merchantSalePrice
                            ).toFixed(2)}
                          </h3>
                        ) : item.productMerchantBike?.imateDiscountPrice !==
                          0 ? (
                          <h3>
                            INR{" "}
                            {parseFloat(
                              item.productMerchantBike?.imateDiscountPrice
                            ).toFixed(2)}
                          </h3>
                        ) : (
                          <h3>
                            INR{" "}
                            {parseFloat(
                              item.productMerchantBike?.currentSalePrice
                            ).toFixed(2)}
                          </h3>
                        )
                      ) : item.productMerchantLmv &&
                        item.productMerchantLmv?.merchantSalePrice !== 0 ? (
                        <h3>
                          INR{" "}
                          {parseFloat(
                            item.productMerchantLmv?.merchantSalePrice
                          ).toFixed(2)}
                        </h3>
                      ) : item.productMerchantLmv?.imateDiscountPrice !== 0 ? (
                        <h3>
                          INR{" "}
                          {parseFloat(
                            item.productMerchantLmv?.imateDiscountPrice
                          ).toFixed(2)}
                        </h3>
                      ) : (
                        <h3>
                          INR{" "}
                          {parseFloat(
                            item.productMerchantLmv?.currentSalePrice
                          ).toFixed(2)}
                        </h3>
                      )}
                      {/* {item.productMerchantBike &&
                      item.productMerchantBike?.imateDiscountPrice !== 0 ? (
                        <h3>
                          INR{" "}
                          {parseFloat(
                            item.productMerchantBike?.imateDiscountPrice
                          ).toFixed(2)}
                        </h3>
                      ) : item.productMerchantLmv &&
                        item.productMerchantLmv.imateDiscountPrice !== 0 ? (
                        <h3>
                          INR{" "}
                          {parseFloat(
                            item.productMerchantLmv.imateDiscountPrice
                          ).toFixed(2)}
                        </h3>
                      ) : null} */}
                      {/* {item.productMerchantBike ? (
                        item.productMerchantBike &&
                        item.productMerchantBike.imateDiscountPrice === 0 ? (
                          <h3>
                            INR{" "}
                            {parseFloat(
                              item.productMerchantBike?.currentSalePrice
                            ).toFixed(2)}
                          </h3>
                        ) : (
                          <h4>
                            INR{" "}
                            {parseFloat(
                              item.productMerchantBike?.currentSalePrice
                            ).toFixed(2)}
                          </h4>
                        )
                      ) : null}
                      {item.productMerchantLmv ? (
                        item.productMerchantLmv &&
                        item.productMerchantLmv.imateDiscountPrice === 0 ? (
                          <h3>
                            INR{" "}
                            {parseFloat(
                              item.productMerchantLmv?.currentSalePrice
                            ).toFixed(2)}
                          </h3>
                        ) : (
                          <h4>
                            INR{" "}
                            {parseFloat(
                              item.productMerchantLmv?.currentSalePrice
                            ).toFixed(2)}
                          </h4>
                        )
                      ) : null} */}

                      <h4>
                        INR{" "}
                        {item.productMerchantBike
                          ? item.productMerchantBike?.currentActualPrice
                          : item.productMerchantLmv?.currentActualPrice}
                      </h4>
                    </div>
                    {item.addOns.length !== 0 ||
                    item.addOnsbike.length !== 0 ? (
                      <h2>Addons</h2>
                    ) : (
                      <div className="quotes">
                        {" "}
                        <p>
                          <BsShieldFillCheck /> Use our Secured App
                        </p>
                        <p>
                          <FaTag /> Get Warrenty on each services
                        </p>
                      </div>
                    )}
                    {item.productMerchantBike
                      ? item.addOnsbike.map((addon) => {
                          return (
                            <div className="addon-product" key={addon._id}>
                              <p>{addon?.product.productName}</p>
                              <p>INR {addon.currentActualPrice}</p>
                              <p>INR {addon.currentSalePrice}</p>
                            </div>
                          );
                        })
                      : item.addOns.map((addon) => {
                          return (
                            <div className="addon-product" key={addon._id}>
                              <p>{addon?.product.productName}</p>
                              <p>INR {addon.currentActualPrice}</p>
                              <p>INR {addon.currentSalePrice}</p>
                            </div>
                          );
                        })}

                    {(
                      item.vehicleType === "Bike"
                        ? item.productMerchantBike?.extraService.length !== 0
                        : item.productMerchantLmv?.extraService.length !== 0
                    ) ? (
                      <h2>Extra Services</h2>
                    ) : (
                      <div className="quotes">
                        {" "}
                        <p>
                          <RiCouponFill /> Use your coupen code to get discount
                        </p>
                        <p>
                          <AiFillSetting /> Get Free service on product
                        </p>
                      </div>
                    )}

                    {item.productMerchantBike
                      ? item.productMerchantBike?.extraService.map(
                          (service) => {
                            return (
                              <div className="addon-product" key={service._id}>
                                <p>{service?.product.productName}</p>
                                <p>INR {service.currentActualPrice}</p>
                                <p>INR 0.00</p>
                              </div>
                            );
                          }
                        )
                      : item.productMerchantLmv?.extraService.map((service) => {
                          return (
                            <div className="addon-product" key={service._id}>
                              <p>{service?.product.productName}</p>
                              <p>INR {service.currentActualPrice}</p>
                              <p>INR 0.00</p>
                            </div>
                          );
                        })}

                    {/* <div className="cart__page-btn">
                      <Link className="addToCart__btn" to="/checkout">
                        Proceed to checkout
                      </Link>
                    </div> */}
                  </div>
                  <div
                    className="close-icon"
                    onClick={() => deleteFromCart("add-to-cart", item._id)}
                  >
                    <IoIosClose />
                  </div>
                </div>
              ))}
            </div>
            <SelectedProduct product={selectedValue} />
          </div>
        )}
      </div>
    </CartStyleWrapper>
  );
};

export default Cart;
