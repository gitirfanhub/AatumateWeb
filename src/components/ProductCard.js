import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseUrl } from "../utils/constants";
import defaultImage from "../images/Aatumate_Icon_Grey.svg";

const ProductCardStyleWrapper = styled.div`
  width: 210px;
  height: auto;
  .product-link {
    display: block;
    text-decoration: none;
    height: 100%;
    .product {
      position: relative;
      height: 100%;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      transition: all 0.3s ease;
      .product-container {
        width: 100%;
        height: 100%;
        .bg {
          position: relative;
          background-color: ${({ theme }) => theme.colors.backgroundGrey};
          border-radius: 4px;
        }
      }
      &:hover {
        border-color: transparent;
      }
    }
    .swiper {
      position: relative;
      cursor: pointer;
      /* background: ${({ theme }) => theme.colors.secondary}; */
      img {
        display: block;
        height: 250px;
        object-fit: contain;
      }
    }
    .swiper-slide {
      background-color: transparent;
      width: 100% !important;
    }
    .product-info {
      padding: 10px;
      h1 {
        font: ${({ theme }) => theme.fontAppearance.contentBold};
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 0.3rem;
      }
    }
  }
`;

const ProductCard = ({ product }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);

  const productArray = [defaultImage];

  return (
    <ProductCardStyleWrapper>
      <Link
        to={`/merchants/${product._id}`}
        state={{ vehicleType: product.subcategory?.vehicleType }}
        className="product-link"
      >
        <div
          className="product"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.start()}
          onMouseLeave={() => {
            swiperRef.current.swiper &&
              swiperRef.current.swiper.autoplay.stop();
            swiperRef.current.swiper && swiperRef.current.swiper.slideTo(0);
          }}
        >
          <div className="product-container">
            <div className="bg">
              <div className="swiper">
                <Swiper
                  ref={swiperRef}
                  centeredSlides={true}
                  autoplay={{ delay: 500, stopOnLastSlide: false }}
                  speed={500}
                  modules={[Autoplay]}
                >
                  {product?.productImage.map((img, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img
                          src={`${baseUrl}/productServerImage/${img}`}
                          alt={`${product?.productName.substring(0, 10)}`}
                          onError={(event) => {
                            event.target.src = `${defaultImage}`;
                            event.onerror = null;
                          }}
                        />
                      </SwiperSlide>
                    );
                  })}
                  {product.productImage.length === 0
                    ? productArray.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img
                              src={item}
                              alt=""
                              onError={(event) => {
                                event.target.src = `${defaultImage}`;
                                event.onerror = null;
                              }}
                            />
                          </SwiperSlide>
                        );
                      })
                    : null}
                </Swiper>
              </div>
            </div>
            <div className="product-info">
              <h1>
                {product?.productName.length > 45
                  ? `${product?.productName.substring(0, 45)}...`
                  : product?.productName}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </ProductCardStyleWrapper>
  );
};

export default ProductCard;
