import React from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper";
import { Pagination } from "swiper";

const CustomCarouselWrapper = styled.div`
  .MuiIconButton-root {
    padding: 0.1rem;
    font-size: 2rem;
  }
  .swiper {
    cursor: auto;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 7px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadow.default};
    transition: all 0.3s ease;
    z-index: 10;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 1.7rem;
      font-weight: bold;
      transform: translate(-50%, -50%);
    }
  }
`;

const CustomCarousel = ({
  children,
  slidesPerView,
  spaceBetween,
  breakpoints,
  pagination,
  direction,
  mousewheel,
  autoplay
}) => {
  return (
    <CustomCarouselWrapper>
      <Swiper
        direction={direction}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={true}
        pagination={pagination}
        mousewheel={mousewheel}
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        breakpoints={breakpoints}
        autoplay={autoplay}
      >
        {children}
      </Swiper>
    </CustomCarouselWrapper>
  );
};

export default CustomCarousel;
