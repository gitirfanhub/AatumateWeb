import React, { useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../../../utils/constants";
import defaultImage from "../../../images/Aatumate_Icon_Grey.svg";

const MainSwiperStyles = styled.section`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  .main {
    /* height: 600px; */
  }
  img {
    max-width: 100%;
    height: 520px;
    display: block;
    border-radius: 0.25rem;
    object-fit: contain;
  }
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img {
      width: auto;
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    .main {
      height: auto;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      /* height: 400px; */
    }
    .gallery {
      img {
        height: 100px;
        width: auto;
      }
    }
  }
`;

const MainSwiper = ({ images }) => {
  const [active, setActive] = useState(0);
  return (
    <MainSwiperStyles>
      <div className="gallery">
        {images?.map((image, index) => {
          return (
            <img
              src={`${baseUrl}/productServerImage/${image}`}
              key={index}
              alt=""
              onClick={() => setActive(index)}
              className={`${index === active ? "active" : null}`}
            />
          );
        })}
      </div>
      {images && (
        <img
          src={`${baseUrl}/productServerImage/${images[active]}`}
          alt="Product"
          className="main"
          onError={(event) => {
            event.target.src = `${defaultImage}`;
            event.onerror = null;
          }}
        />
      )}
    </MainSwiperStyles>
  );
};

export default MainSwiper;
