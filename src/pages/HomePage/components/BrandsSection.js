import React from "react";
import { Link } from "react-router-dom";
import BrandCard from "../../../components/BrandCard";
import { useBrandsContext } from "../../../context/brands_context";
import { baseUrl } from "../../../utils/constants";
import { BrandsWrapper } from "../HomePageStyles";

const BrandsSection = () => {
  const { brands } = useBrandsContext();
  return (
    <BrandsWrapper>
      <div className="brands-container">
        <div className="brands-grid">
          <div className="brands-title">
            <h1 className="section-title">
              <span>Our</span>
              <br />
              Brands
            </h1>
          </div>
          <div className="brands-right">
            <div className="brands-box">
              {brands.slice(0, 8).map((brand) => {
                return (
                  <BrandCard
                    key={brand._id}
                    brandImage={`${baseUrl}/productServerImage/${brand.brandImage}`}
                    brandName={brand.brandName}
                  />
                );
              })}
            </div>
            <div className="more-brands">
              <p>Want to view more brands?</p>
              <Link to="/brands">Click here</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="feature">
        <CustomCarousel
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={brandsBreakpoints}
        >
          {brands.map((brand) => {
            return (
              <SwiperSlide key={brand._id}>
                <BrandCard
                  key={brand._id}
                  brandImage={`${baseUrl}/productServerImage/${brand.brandImage}`}
                  brandName={brand.brandName}
                />
              </SwiperSlide>
            );
          })}
        </CustomCarousel>
      </div> */}
    </BrandsWrapper>
  );
};

export default BrandsSection;
