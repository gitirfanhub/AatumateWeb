import React from "react";
import { AddonsStyleWrapper } from "../ProductDetailsStyles";
import { baseUrl } from "../../../utils/constants";

const ExtraServices = (props) => {
  const { extraService } = props;

  return (
    <AddonsStyleWrapper>
      {extraService?.length >= 1 ? (
        <div className="free-service">
          <h3 className="free-service__title">Extra Services (Free)</h3>
          <div className="addons-items">
            <div className="addons-flex">
              {extraService?.map((item, index) => {
                return (
                  <div className="items-box" key={item._id}>
                    <img
                      src={`${baseUrl}/productServerImage/${item.productImage[0]}`}
                      alt={`${item.product.productName}`}
                      key={index}
                      className="addon-image"
                      width="120px"
                      height="120px"
                    />
                    <div className="items-details">
                      <p className="product-name">{item.product.productName}</p>
                      <div className="price">
                      INR {parseFloat(item.currentSalePrice).toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </AddonsStyleWrapper>
  );
};

export default ExtraServices;
