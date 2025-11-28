import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomCarousel from "../../../components/CustomCarousel";
import ServiceCard from "../../../components/ServiceCard";
import { useProductContext } from "../../../context/product_context";
import { useWorkshopContext } from "../../../context/workshop_context";
import { breakpoints } from "../../../store/CarouselData";
import { baseUrl } from "../../../utils/constants";
import { FeatureServicesWrapper } from "../HomePageStyles";

const FeatureCarServices = () => {
  const { feature_product_lmv } = useProductContext();
  const { parameters } = useWorkshopContext();
  return (
    <FeatureServicesWrapper>
      <h1 className="section-title">Featured Car Services</h1>
      <div className="feature">
        <CustomCarousel
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={breakpoints}
        >
          {feature_product_lmv
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

export default FeatureCarServices;
