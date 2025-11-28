import React from "react";
import styled from "styled-components";
import defaultImage from "../images/Aatumate_Icon_Grey.svg";

const ServiceCardStyleWrapper = styled.div`
  .service-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 210px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    margin: 10px;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.backgroundGrey};
      z-index: -1;
      clip-path: circle(100px at 80% 20%);
      transition: 0.5s ease-in-out;
    }
    &:hover::before {
      clip-path: circle(300px at 80% -20%);
    }
    .service-image {
      width: 100%;
      img {
        max-width: 100%;
        height: 250px;
        object-fit: contain;
      }
    }
    .service-content {
      width: 100%;
      padding: 1rem;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.grey};
      .service-name {
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        color: ${({ theme }) => theme.colors.primary};
      }
      .service-subname {
        font: ${({ theme }) => theme.fontAppearance.defaultLight};
        color: ${({ theme }) => theme.colors.primary};
        padding-top: 10px;
      }
    }
  }
`;
const ServiceCard = ({ image, productName, subcategory }) => {
  return (
    <ServiceCardStyleWrapper>
      <div className="service-card">
        <div className="service-image">
          <img
            src={image}
            alt={productName}
            onError={(event) => {
              event.target.src = `${defaultImage}`;
              event.onerror = null;
            }}
          />
        </div>
        <div className="service-content">
          <h4 className="service-name">{productName}</h4>
          <p className="service-subname">{subcategory}</p>
        </div>
      </div>
    </ServiceCardStyleWrapper>
  );
};

export default ServiceCard;
