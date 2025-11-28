import React from "react";
import styled from "styled-components";
import defaultImage from "../images/Aatumate_Icon_Grey.svg";

const BrandCardStyleWrapper = styled.div`
  /* .brand-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadow.cardShadow};
    transition: all 300ms ease-in-out;
    &:hover {
      box-shadow: ${({ theme }) => theme.shadow.buttonShadow};
    }
    .brand-image {
      padding: 0.5rem 1rem;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .brand-name {
      width: 100%;
      padding: 1rem;
      font: ${({ theme }) => theme.fontAppearance.defaultMedium};
      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 0 0 5px 5px;
    }
  } */
  .brand-card {
    height: 200px;
    .brand-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 18px;
      margin: auto;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      .brand-image {
        width: 80px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .brand-name {
        font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const BrandCard = ({ brandImage, brandName }) => {
  return (
    <BrandCardStyleWrapper>
      <div className="brand-card">
        <div className="brand-box">
          <div className="brand-image">
            <img
              src={brandImage}
              alt={brandName}
              onError={(event) => {
                event.target.src = `${defaultImage}`;
                event.onerror = null;
              }}
            />
          </div>
          <p className="brand-name">{brandName}</p>
        </div>
      </div>
    </BrandCardStyleWrapper>
  );
};

export default BrandCard;
