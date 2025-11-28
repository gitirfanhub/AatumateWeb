import React from "react";
import OrderSuccessStyles from "./OrderSuccessStyles";
import Lottie from "react-lottie";
import Success from "../../json/Payment_Success.json";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: Success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <OrderSuccessStyles>
      <p className="success">Your Order placed successfully!</p>
      <div className="animation">
        {/* <Lottie options={defaultOption} /> */}
      </div>
      <Link
        className="addToCart__btn"
        to="/profile"
        state={{ select: "orders" }}
      >
        My Orders
      </Link>
    </OrderSuccessStyles>
  );
};

export default OrderSuccess;
