import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../../context/cart_context";
import NoOrder from "../../../json/No_Orders.json";

import OrderCard from "./OrderCard";

const OrderStyles = styled.section`  
  .order-section {
    .orders {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Orders = () => {
  const { bike_orders, lmv_orders } = useCartContext();
  const orders = [...bike_orders, ...lmv_orders];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoOrder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  console.log(orders);

  if (orders.length === 0) {
    return (
      <OrderStyles>
        <div className="animation">
          {/* <Lottie options={defaultOptions} /> */}
        </div>
      </OrderStyles>
    );
  }

  return (
    <OrderStyles>
      <div className="order-section">
        <h3 className="orders">Orders</h3>
        {orders.map((item) => (
          <OrderCard item={item} key={item._id} />
        ))}
      </div>
    </OrderStyles>
  );
};

export default Orders;
