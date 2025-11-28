import React, { useEffect } from "react";
import MerchantDetailStyleWrapper from "./MerchantDetailStyles";
import Breadcrumb from "../../components/Breadcrumb";
import MerchantCard from "../../components/MerchantCard";
import { useProductContext } from "../../context/product_context";
import { bike_products_url, lmv_products_url } from "../../utils/constants";
import { useBrandsContext } from "../../context/brands_context";
import { useLocation, useParams } from "react-router-dom";
import Lottie from "react-lottie";
import NoService from "../../json/No_Service.json";

const MerchantDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { single_product: product, fetchSingleProduct } = useProductContext();
  const { customer_vehicle } = useBrandsContext();
  const selectedVehicle = customer_vehicle?.find((item) => item.isSelected);

  useEffect(() => {
    if (state?.vehicleType === "Bike") {
      fetchSingleProduct(`${bike_products_url}/${id}`);
    }
    if (state?.vehicleType === "LMV") {
      fetchSingleProduct(`${lmv_products_url}/${id}`);
    }
  }, [id]);

  const filteredMerchant = product?.productMerchant?.filter((item) => {
    console.log(item?.merchantId.status, item?.merchantId.customerStatus);
    return (
      (item.isApplyAllCars &&
        item?.merchantId.status &&
        item?.merchantId.customerStatus === "Active") ||
      (!item.isApplyAllCars &&
        item.vehicle?._id === selectedVehicle?._id &&
        item?.merchantId.status &&
        item?.merchantId.customerStatus === "Active")
    );
  });

  console.log(product?.productMerchant);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoService,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (product?.productMerchant?.length === 0) {
    return (
      <MerchantDetailStyleWrapper>
        <div className="animation">
          {/* <Lottie options={defaultOptions} /> */}
        </div>
        <p className="no-merchant">No merchant Found...</p>
      </MerchantDetailStyleWrapper>
    );
  }

  return (
    <MerchantDetailStyleWrapper>
      <div className="breadcrumb">
        <Breadcrumb title="Merchants" />
      </div>
      <div className="product">
        <h6 className="product-name">
          {" "}
          Product Name: <span>{product?.productName}</span>
        </h6>
      </div>
      <div className="merchant-container">
        {filteredMerchant?.map((merchant) => (
          <MerchantCard items={merchant} key={merchant._id} />
        ))}
      </div>
    </MerchantDetailStyleWrapper>
  );
};

export default MerchantDetails;
