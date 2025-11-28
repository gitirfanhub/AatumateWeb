import React from "react";
import { FeedbackWrapper } from "../HomePageStyles";
import { merchantBreakpoints } from "../../../store/CarouselData";
import FeedbackCard from "../../../components/FeedbackCard";
import CustomCarousel from "../../../components/CustomCarousel";
import { SwiperSlide } from "swiper/react";
import { useProductContext } from "../../../context/product_context";

const Feedback = () => {
  const { lmv_reviews } = useProductContext();
  // console.log(lmv_reviews);
  return (
    <FeedbackWrapper>
      <h1 className="section-title">Customer Feedback</h1>
      <div className="feature">
        <CustomCarousel
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={merchantBreakpoints}
          pagination
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {lmv_reviews.map((review) => {
            return (
              <SwiperSlide key={review._id}>
                <FeedbackCard
                  customerImage={review.lmvOrder?.customer.customerProfile}
                  customerName={review.lmvOrder?.customer.firstName}
                  rating={review.rating}
                  feedback={review.description}
                />
              </SwiperSlide>
            );
          })}
        </CustomCarousel>
      </div>
    </FeedbackWrapper>
  );
};

export default Feedback;
