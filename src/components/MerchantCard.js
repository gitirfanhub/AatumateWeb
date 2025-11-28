import React from "react";
import styled from "styled-components";
import { baseUrl } from "../utils/constants";
import { BsStarFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import defaultImage from "../images/Aatumate_Icon_Grey.svg";

const MerchantCardStyles = styled.section`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
  .merchant-card {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 1rem;
    max-width: 400px;
    border-radius: 1rem;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.13),
      0 1px 4px 0 rgba(0, 0, 0, 0.11);

    .merchant-images {
      max-width: 150px;
      height: 150px;
      img {
        max-width: 150px;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
        border-radius: 15px;
      }
    }
    .merchant-details {
      padding: 5px;
      .merchant-name {
        font: ${({ theme }) => theme.fontAppearance.titleRegular};
        margin-bottom: 0.5rem;
      }
      .description {
        font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        margin-bottom: 0.5rem;
        p {
          line-height: 1rem;
        }
      }
      .rating-details {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 0.5rem;
        .rating,
        .kilometers {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.secondary};
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
          padding: 4px;
          border-radius: 3px;
          svg {
            font-size: 0.5rem;
          }
        }
      }
      .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price-details {
          display: flex;
          align-items: center;
          column-gap: 10px;
          .sale-price {
            font: ${({ theme }) => theme.fontAppearance.contentMedium};
          }
          .actual-price {
            font: ${({ theme }) => theme.fontAppearance.defaultMedium};
            color: ${({ theme }) => theme.colors.tertiary};
            text-decoration: line-through;
          }
        }
      }
      .address {
        display: flex;
        align-items: flex-end;
        svg {
          font-size: 1rem;
        }
        p {
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
          color: ${({ theme }) => theme.colors.tertiary};
        }
      }
    }
  }
`;

const MerchantCard = (props) => {
  const { items } = props;
  const { merchantId } = items;

  const computeDistance = (prevLat, prevLong, lat, long) => {
    const prevLatInRad = toRad(prevLat);
    const prevLongInRad = toRad(prevLong);
    const latInRad = toRad(lat);
    const longInRad = toRad(long);

    return (
      // In kilometers
      6377.830272 *
      Math.acos(
        Math.sin(prevLatInRad) * Math.sin(latInRad) +
          Math.cos(prevLatInRad) *
            Math.cos(latInRad) *
            Math.cos(longInRad - prevLongInRad)
      )
    );
  };

  const toRad = (angle) => {
    return (angle * Math.PI) / 180;
  };

  const myLocation = JSON.parse(localStorage.getItem("myLocation"));

  // console.log(
  //   computeDistance(
  //     items.merchantId?.latitude,
  //     items.merchantId?.longitude,
  //     myLocation?.latitude,
  //     myLocation?.longitude
  //   )
  // );

  return (
    <MerchantCardStyles>
      <Link
        to={items.product?._id && `/product/${items.product?._id}`}
        state={{ items: items }}
      >
        <div className="merchant-card">
          <div className="merchant-images">
            <img
              src={`${baseUrl}/merchantServerImage/${merchantId.workshopImage}`}
              alt={`${merchantId.businessName}`}
              onError={(event) => {
                event.target.src = `${defaultImage}`;
                event.onerror = null;
              }}
            />
          </div>
          <div className="merchant-details">
            <h5 className="merchant-name">{merchantId.businessName}</h5>
            <div className="rating-details">
              <div className="rating">
                4.5{" "}
                <span>
                  <BsStarFill />
                </span>
              </div>
              <div className="kilometers">
                <span>
                  <FaRoad />
                </span>{" "}
                &nbsp;{" "}
                {parseFloat(
                  computeDistance(
                    items.merchantId?.latitude,
                    items.merchantId?.longitude,
                    myLocation?.latitude,
                    myLocation?.longitude
                  )
                ).toFixed(2)}{" "}
                Km
              </div>
            </div>
            {/* <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: items.product?.productDesc
              }}
            ></div> */}
            <div className="details">
              <div className="price-details">
                {items.merchantSalePrice !== 0 ? (
                  <h4 className="sale-price">
                    INR {parseFloat(items.merchantSalePrice).toFixed(2)}
                  </h4>
                ) : null}
                {items.imateDiscountPrice !== 0 &&
                items.merchantSalePrice === 0 ? (
                  <h4 className="sale-price">
                    INR {parseFloat(items.imateDiscountPrice).toFixed(2)}
                  </h4>
                ) : null}
                <h4
                  className={
                    items.imateDiscountPrice === 0 &&
                    items.merchantSalePrice === 0
                      ? "sale-price"
                      : "actual-price"
                  }
                >
                  INR {parseFloat(items.currentSalePrice).toFixed(2)}
                </h4>
                <h6 className="actual-price">
                  INR {parseFloat(items.currentActualPrice).toFixed(2)}
                </h6>
              </div>
            </div>
            <div className="address">
              <span>
                <MdLocationOn />
              </span>
              <p>
                {items.merchantId.addressLine1} {items.merchantId.addressLine2}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </MerchantCardStyles>
  );
};

export default MerchantCard;
