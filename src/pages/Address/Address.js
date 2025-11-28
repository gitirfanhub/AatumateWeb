import React from "react";
import AddressStyleWrapper from "./AddressStyles";

const Address = () => {
  return (
    <AddressStyleWrapper>
      <div className="address-page">
        <div className="delivery-address">
          <div className="address-title">
            <h4 className="select-address">Select Delivery Address</h4>
            <button className="new-address-btn">ADD NEW ADDRESS</button>
          </div>
        </div>
        <div className="product-details"></div>
      </div>
    </AddressStyleWrapper>
  );
};

export default Address;
