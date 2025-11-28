import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import DefaultImage from "../images/Aatumate_Icon_Grey.svg";
import UnknownJson from "../json/Unknown_Issues.json";

const CategoryCardWrapper = styled.div`
  .card-wrapper {
    width: 120px;

    .category-card {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background-color: ${({ bgBlack }) => (bgBlack ? "#D7D7D7" : "#EFEFEF")};
      width: 120px;
      height: 120px;
      margin: auto 0;
      border-radius: 50%;
      box-shadow: ${({ theme }) => theme.shadow.buttonShadow};
      cursor: pointer;
      transition: 0.5s ease-in-out;
      .category-image {
        width: ${({ bgBlack }) => (bgBlack ? "70%" : "60%")};
        height: auto;
        margin: auto;
        text-align: center;
        img {
          width: 50px;
          height: 50px;
        }
        svg {
          width: 100% !important;
          height: auto !important;
        }
      }
      &:hover {
        transform: scale(1.1);
        box-shadow: ${({ theme }) => theme.shadow.default};
      }
    }
  }
  .category-name {
    font: 500 12px/1 "Neurial Grotesk Medium";
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: 10px 0;
  }
  @media screen and (max-width: 768px) {
    .category-card {
      width: 100px;
      height: 100px;
      padding: 0.5rem;
    }
    .category-name {
      overflow: hidden;
    }
  }
`;

const CategoryCard = (props) => {
  const { bgBlack, image, name, onClick } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: UnknownJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <CategoryCardWrapper bgBlack={bgBlack}>
      <div className="card-wrapper">
        <div className="category-card" onClick={onClick}>
          <div className="category-image">
            {/* {bgBlack ? (
              // <Lottie options={defaultOptions} />
            ) : (
              <img
                src={image}
                alt={name}
                onError={(event) => {
                  event.target.src = `${DefaultImage}`;
                  event.onerror = null;
                }}
              />
            )} */}
          </div>
        </div>
        <div className="category-name">{name}</div>
      </div>
    </CategoryCardWrapper>
  );
};

export default CategoryCard;
