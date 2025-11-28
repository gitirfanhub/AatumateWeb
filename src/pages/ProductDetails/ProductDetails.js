import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { useProductContext } from "../../context/product_context";
import Addons from "./components/Addons";
import ExtraServices from "./components/ExtraServices";
import MainSwiper from "./components/MainSwiper";
import ProductInfo from "./components/ProductInfo";
import { ProductDetailStyleWrapper } from "./ProductDetailsStyles";

const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const {
    fetchProductByLMVMerchant,
    fetchProductByBikeMerchant,
    merchant_product
  } = useProductContext();
  const [selectedAddons, setSelectedAddons] = useState([]);

  const fetchData = () => {
    if (state.items.product.subcategory.vehicleType === "LMV") {
      fetchProductByLMVMerchant("lmv-product-merchant", state.items._id);
    } else if (state.items.product.subcategory.vehicleType === "Bike") {
      fetchProductByBikeMerchant("bike-product-merchant", state.items._id);
    }
  };

  useEffect(() => {
    fetchData();
  }, [state.items._id]);

  return (
    <ProductDetailStyleWrapper>
      <Breadcrumb title={merchant_product?.product?.productName} />
      <div className="product-grid">
        <MainSwiper images={merchant_product?.product?.productImage} />
        <ProductInfo
          product={merchant_product}
          selectedAddons={selectedAddons}
        />
      </div>
      <Addons
        addons={merchant_product.addOns}
        selectedAddons={selectedAddons}
        setSelectedAddons={setSelectedAddons}
      />
      <ExtraServices extraService={merchant_product.extraService} />
    </ProductDetailStyleWrapper>
  );
};

export default ProductDetails;
