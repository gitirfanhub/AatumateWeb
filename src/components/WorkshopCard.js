import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import defaultImage from "../images/Aatumate_Icon_Grey.svg";

const WorkshopCardStyleWrapper = styled.div`
  margin: 0.5rem;
  width: 100%;
  .workshop-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    .image {
      position: relative;
      height: 450px;
      width: 100%;
      span {
        display: block;
        position: absolute;
        inset: 0;
        overflow: hidden;
        width: initial;
        height: initial;
        background: none;
        opacity: 1;
        border: 0;
        margin: 0;
        padding: 0;
        img {
          display: block;
          position: absolute;
          inset: 0px;
          padding: 0px;
          border: none;
          margin: auto;
          width: 0px;
          height: 0px;
          min-width: 100%;
          max-width: 100%;
          min-height: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }
    }
    .workshop-details {
      display: flex;
      flex-direction: column;
      width: 40%;
      height: 450px;
      padding: 32px;
      background-color: rgb(255, 255, 255);
      max-width: 273px;
      border-radius: 0px 2px 2px 0px;
      .workshop-name {
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        padding-bottom: 14px;
        text-align: left;
      }
      span {
        font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        color: ${({ theme }) => theme.colors.tertiary};
        padding-bottom: 0.5rem;
        text-align: left;
      }
      .kilometer-badge,
      .workshop-rating {
        display: flex;
        padding: 0.2rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        border-radius: 3px;
        vertical-align: middle;
        span {
          color: ${({ theme }) => theme.colors.secondary};
          padding: 0;
        }
      }
      .rating-details {
        display: flex;
        gap: 1.5rem;
        padding-bottom: 1rem;
      }
      .workshop-address {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5px;
        p {
          font: ${({ theme }) => theme.fontAppearance.contentLight};
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.primary};
          text-align: left;
        }
        svg {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 50px;
          height: fit-content;
          margin-top: 0.2rem;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .workshop-card {
      flex-direction: column-reverse;
      .workshop-details {
        width: 100%;
        max-width: 100%;
        padding: 10px;
        height: auto;
        .workshop-address svg {
          font-size: 30px;
        }
      }
    }
  }
`;

const WorkshopCard = ({
  workshopImage,
  workshopName,
  kilometers,
  rating,
  address
}) => {
  return (
    <WorkshopCardStyleWrapper>
      <div className="workshop-card">
        <div className="image">
          <span>
            <img
              src={workshopImage}
              alt={workshopName}
              onError={(event) => {                
                event.target.src = `${defaultImage}`;
                event.onerror = null;                
              }}              
            />
          </span>
        </div>
        <div className="workshop-details">
          <span>Workshop Name: </span>
          <div className="workshop-name">{workshopName}</div>
          <span>Distance & rating:</span>
          <div className="rating-details">
            {kilometers ? (
              <div className="kilometer-badge">{kilometers}</div>
            ) : null}

            <div className="workshop-rating">
              <AiFillStar />
              <span>{rating}</span>
            </div>
          </div>
          <div className="workshop-address">
            <HiLocationMarker />
            <p>{address}</p>
          </div>
        </div>
      </div>
    </WorkshopCardStyleWrapper>
  );
};

export default WorkshopCard;
