import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import NoService from "../json/No_Service.json";
import Lottie from "react-lottie";

const ProductsListWrapper = styled.div`
  min-height: 70vh;
  .products-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-around;
    gap: 1rem;
    padding-bottom: 1.5rem;
  }
  .products-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    padding-bottom: 1.5rem;
  }
  .no-products {
    font: ${({ theme }) => theme.fontAppearance.contentMedium};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }
  .animation {
    width: 40%;
    margin: 3rem auto;
  }
`;

const ProductsList = ({ filter, products }) => {
  console.log(products);
  const searchProduct = (filter, item) => {
    if (filter)
      return item?.productName?.toLowerCase().includes(filter.toLowerCase());
  };

  const filterItems = (filter, item) => {
    return searchProduct(filter, item);
  };

  const filterFunction = (item) => {
    if (filter) {
      if (filterItems(filter, item)) {
        return item;
      }
    } else return item;
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoService,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (products?.length === 0) {
    return (
      <ProductsListWrapper>
        <div className="no-products">
          Sorry, No Products Found for this subcategory
        </div>
        <div className="animation">
          <Lottie options={defaultOptions} />
        </div>
      </ProductsListWrapper>
    );
  }
  return (
    <ProductsListWrapper>
      <div className="products-grid">
        {products.filter(filterFunction)?.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </ProductsListWrapper>
  );
};

export default ProductsList;
