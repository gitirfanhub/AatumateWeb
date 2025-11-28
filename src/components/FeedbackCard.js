import React from "react";
import styled from "styled-components";
import { baseUrl } from "../utils/constants";
import StarRating from "./StarRating";
import defaultImage from "../images/Aatumate_Icon_Grey.svg";

const FeedbackCardStyleWrapper = styled.div`
  width: 70%;
  margin: 1rem auto;
  .feedback-card {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 60px;
      padding: 30px 0;
      .thumbnail {
        position: relative;
        width: 150px;
        height: 150px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: calc(100% + 30px);
          height: calc(100% + 30px);
          background-color: ${({ theme }) => theme.colors.primary};
          border-radius: 50%;
          z-index: -1;
          box-shadow: 0px 20px 30px -10px rgb(0 0 2 / 35%);
          transition: border-radius 0.5s 0.3s;
        }
      }
      .aside {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        position: relative;
        /* padding-top: 15px; */
        & > p {
          position: relative;
          font: ${({ theme }) => theme.fontAppearance.contentLight};
          line-height: 1.7;
          margin-bottom: 30px;
          text-align: left;
        }
        .name {
          position: relative;
          width: fit-content;
          line-height: 1;
          h4 {
            font: ${({ theme }) => theme.fontAppearance.contentBold};
            color: ${({ theme }) => theme.colors.primary};
            margin-bottom: 0.5rem;
            text-align: left;
            opacity: 0.8;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .feedback-card {
      .wrapper {
        flex-direction: row;
        padding: 30px 100px;
        .thumbnail {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
`;

const FeedbackCard = ({ customerImage, customerName, rating, feedback }) => {
  return (
    <FeedbackCardStyleWrapper>
      <div className="feedback-card">
        <div className="wrapper">
          <div className="thumbnail">
            <img
              src={`${baseUrl}/customerServerImage/${customerImage}`}
              alt={`${customerName}`}
              onError={(event) => {
                event.target.src = `${defaultImage}`;
                event.onerror = null;
              }}
            />
          </div>
          <div className="aside">
            <p>{feedback}</p>
            <div className="name">
              <h4>{customerName}</h4>
              <div className="rating">
                <StarRating stars={rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeedbackCardStyleWrapper>
  );
};

export default FeedbackCard;
