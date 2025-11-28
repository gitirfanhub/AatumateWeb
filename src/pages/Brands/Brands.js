import React from "react";
import BrandCard from "../../components/BrandCard";
import Breadcrumb from "../../components/Breadcrumb";
import { useBrandsContext } from "../../context/brands_context";
import { baseUrl } from "../../utils/constants";
import BrandStyleWrapper from "./BrandStyles";

const Brands = () => {
  const { brands } = useBrandsContext();
  return (
    <BrandStyleWrapper>
      <div className="breadcrumb">
        <Breadcrumb title="Brands" />
      </div>
      <div className="brands-container">
        <div className="brands-title">
          Our <span>Brands</span>
        </div>
        <p className="brands-content">
          We provide services for almost all the brands which is in automobile
          manufactures of Bike and LMV vehicle types and also spare parts with
          affordable price and high quality services.
        </p>
        <div className="brands-list">
          {brands.map((item) => (
            <BrandCard
              key={item._id}
              brandImage={`${baseUrl}/productServerImage/${item.brandImage}`}
              brandName={item.brandName}
            />
          ))}
        </div>
      </div>
    </BrandStyleWrapper>
  );
};

export default Brands;
