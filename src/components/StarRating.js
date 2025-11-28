import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: gold;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  /* @media (max-width: 768px) {
    span {
      font-size: 1rem;
    }
  } */
`;

const StarRating = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <StarRatingWrapper>
      <div className="stars">{tempStars}</div>
    </StarRatingWrapper>
  );
};

export default StarRating;
