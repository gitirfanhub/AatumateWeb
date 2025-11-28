import React from "react";
import styled from "styled-components";
import { baseUrl } from "../utils/constants";
import { reviewTrimHandler } from "../utils/utilsfunction";
import defaultImage from "../images/Aatumate_Icon_Grey.svg";

const CustomerCardStyles = styled.section`
  .customer {
    padding: 0.5rem;
    width: 150px;
    height: auto;
    .customer-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;
      img {
        max-width: 100%;
        height: 100%;
        clip-path: circle();
      }
    }
    .review-text {
      .customer-name {
        font: ${({ theme }) => theme.fontAppearance.defaultBold};
        text-align: center;
        margin: 0.5rem 0;
      }
      p {
        font: ${({ theme }) => theme.fontAppearance.defaultLight};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
        line-height: 1.4;
      }
    }
  }
  @media only screen and (max-width: 576px) {
  }
`;

const CustomerCard = (props) => {
  const { review, vehicleType } = props;
  return (
    <CustomerCardStyles>
      <div className="customer">
        <div className="customer-image">
          <img
            src={
              vehicleType === "LMV"
                ? `${baseUrl}/customerServerImage/${review.lmvOrder?.customer.customerProfile}`
                : `${baseUrl}/customerServerImage/${review.bikeOrder?.customer.customerProfile}`
            }
            alt={`${
              vehicleType === "LMV"
                ? review.lmvOrder?.customer.firstName
                : review.bikeOrder?.customer.firstName
            }`}
            onError={(event) => {
              event.target.src = `${defaultImage}`;
              event.onerror = null;
            }}
          />
        </div>
        <div className="review-text">
          <h5 className="customer-name">
            {vehicleType === "LMV"
              ? `${review.lmvOrder?.customer.firstName} ${review.lmvOrder?.customer.lastName}`
              : `${review.bikeOrder?.customer.firstName} ${review.bikeOrder?.customer.lastName}`}
          </h5>
          <p>{reviewTrimHandler(review.description)}</p>
        </div>
      </div>
    </CustomerCardStyles>
  );
};

export default CustomerCard;
