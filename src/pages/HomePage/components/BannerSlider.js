import React from "react";
import { BannerSliderWrapper } from "../HomePageStyles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


import Banner1 from "../../../images/Banner-1.jpg";
import Banner2 from "../../../images/Banner-2.jpg";
import Banner3 from "../../../images/Banner-3.jpg";
import Banner4 from "../../../images/Banner-4.jpg";

const sliderData = [
  { image: Banner1, title: "Banner One" },
  { image: Banner2, title: "Banner Two" },
  { image: Banner3, title: "Banner Three" },
  { image: Banner4, title: "Banner FOur" }
];
const BannerSlider = () => {
  return (
    <BannerSliderWrapper>
      <div className="carousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="carousel-wrapper"
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </BannerSliderWrapper>
  );
};

export default BannerSlider;
