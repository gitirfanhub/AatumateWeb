import React from "react";
import { FeatureServicesWrapper } from "../HomePageStyles";
import CustomCarousel from "../../../components/CustomCarousel";
import ServiceCard from "../../../components/ServiceCard";
import { breakpoints } from "../../../store/CarouselData";
import { baseUrl } from "../../../utils/constants";
import { SwiperSlide } from "swiper/react";
import { useProductContext } from "../../../context/product_context";
import { useWorkshopContext } from "../../../context/workshop_context";

const FeatureBikeServices = () => {
  const { feature_product_bike } = useProductContext();
  const { parameters } = useWorkshopContext();

  return (
    <FeatureServicesWrapper>
      <h1 className="section-title">Featured Bike Services</h1>
      <div className="feature">
        <CustomCarousel
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={breakpoints}
        >
          {feature_product_bike
            .slice(0, parameters[0]?.featureservicesLimit)
            .map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <ServiceCard
                    key={product._id}
                    image={`${baseUrl}/productServerImage/${product.productImage[0]}`}
                    productName={product.productName}
                    subcategory={product?.subcategory?.subcategoryName}
                  />
                </SwiperSlide>
              );
            })}
        </CustomCarousel>
      </div>
    </FeatureServicesWrapper>
  );
};

export default FeatureBikeServices;
