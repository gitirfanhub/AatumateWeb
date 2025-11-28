import React, { useEffect, useState } from "react";
import { ProductsStyleWrapper } from "./ProductsStyles";
import CustomCarousel from "../../components/CustomCarousel";
import { breakpoints } from "../../store/CarouselData";
import { SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";
import { getData } from "../../utils/fetchData";
import Breadcrumb from "../../components/Breadcrumb";
import ProductsList from "../../components/ProductsList";
import { useProductContext } from "../../context/product_context";

const Products = () => {
  const location = useLocation();
  const { bike_products, lmv_products } = useProductContext();
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [bindedProducts, setBindedProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [active, setActive] = useState(0);

  const fetchSubcategories = async () => {
    const { data } = await getData(
      `subcategory?categoryId=${location.state.id}`
    );
    setSubcategories([{ _id: 1, subcategoryName: "All" }, ...data]);

    if (location.state.vehicleType === "Bike") {
      const bikeProducts = bike_products.filter((product) => {
        return product?.subcategory.category._id === location.state.id;
      });
      setProducts(bikeProducts);
      setBindedProducts(bikeProducts);
    }
    if (location.state.vehicleType === "LMV") {
      const lmvProducts = lmv_products.filter(
        (product) => product?.subcategory.category._id === location.state.id
      );
      setProducts(lmvProducts);
      setBindedProducts(lmvProducts);
    }
  };

  useEffect(() => {
    fetchSubcategories();
  }, [location.state.id]);

  const getProductsById = (id, index) => {
    if (id === 1) {
      setBindedProducts(products);
      setActive(index);
    } else {
      const productsById = products.filter((product) => {
        return product?.subcategory._id === id;
      });
      setBindedProducts(productsById);
      setActive(index);
    }
  };

  return (
    <ProductsStyleWrapper>
      <Breadcrumb title="Products" />
      <div className="category">
        <div className="category-items">
          {location.state.name} - {products.length}{" "}
          {products.length > 1 ? "Items" : "Item"}
        </div>
        <Link to="/" className="active-btn">
          Back
        </Link>
      </div>
      <div className="subcategories">
        <div className="feature">
          <CustomCarousel
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={breakpoints}
          >
            {subcategories.map((subcategory, index) => {
              return (
                <SwiperSlide key={subcategory._id}>
                  <button
                    type="button"
                    className={index === active ? "active-btn" : "btn"}
                    onClick={() => getProductsById(subcategory._id, index)}
                  >
                    {subcategory.subcategoryName}
                  </button>
                </SwiperSlide>
              );
            })}
          </CustomCarousel>
        </div>
        <div className="form-wrapper">
          <form>
            <input
              type="text"
              name="searchproducts"
              placeholder="Search Product"
              className="search-input"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <ProductsList
        filter={filter}
        setFilter={setFilter}
        products={bindedProducts}
      />
    </ProductsStyleWrapper>
  );
};

export default Products;
