import { createContext, useContext, useEffect, useReducer } from "react";
import {
  GET_BIKE_FEATURE_PRODUCTS,
  GET_BIKE_FEATURE_PRODUCTS_ERROR,
  GET_BIKE_FEATURE_PRODUCTS_SUCCESS,
  GET_BIKE_PRODUCTS,
  GET_BIKE_PRODUCTS_ERROR,
  GET_BIKE_PRODUCTS_SUCCESS,
  GET_BIKE_PRODUCT_MERCHANTS,
  GET_BIKE_PRODUCT_MERCHANTS_ERROR,
  GET_BIKE_PRODUCT_MERCHANTS_SUCCESS,
  GET_BIKE_REVIEWS,
  GET_BIKE_REVIEWS_ERROR,
  GET_BIKE_REVIEWS_SUCCESS,
  GET_LMV_FEATURE_PRODUCTS,
  GET_LMV_FEATURE_PRODUCTS_ERROR,
  GET_LMV_FEATURE_PRODUCTS_SUCCESS,
  GET_LMV_PRODUCTS,
  GET_LMV_PRODUCTS_ERROR,
  GET_LMV_PRODUCTS_SUCCESS,
  GET_LMV_PRODUCT_MERCHANTS,
  GET_LMV_PRODUCT_MERCHANTS_ERROR,
  GET_LMV_PRODUCT_MERCHANTS_SUCCESS,
  GET_LMV_REVIEWS,
  GET_LMV_REVIEWS_ERROR,
  GET_LMV_REVIEWS_SUCCESS,
  GET_PRODUCT_BY_MERCHANT_BIKE,
  GET_PRODUCT_BY_MERCHANT_BIKE_ERROR,
  GET_PRODUCT_BY_MERCHANT_BIKE_SUCCESS,
  GET_PRODUCT_BY_MERCHANT_LMV,
  GET_PRODUCT_BY_MERCHANT_LMV_ERROR,
  GET_PRODUCT_BY_MERCHANT_LMV_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SUBCATEGORY_BASED_BIKE_PRODUCTS,
  GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_ERROR,
  GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_SUCCESS,
  GET_SUBCATEGORY_BASED_LMV_PRODUCTS,
  GET_SUBCATEGORY_BASED_LMV_PRODUCTS_ERROR,
  GET_SUBCATEGORY_BASED_LMV_PRODUCTS_SUCCESS
} from "../actions";
import reducer from "../reducers/product_reducer";
import {
  bike_feature_product_url,
  bike_products_url,
  bike_product_merchant_url,
  lmv_feature_product_url,
  lmv_products_url,
  lmv_product_merchant_url,
  bike_review_url,
  lmv_review_url
} from "../utils/constants";
import { getData } from "../utils/fetchData";
import { formatDateTime } from "../utils/utilsfunction";

const initialState = {
  bike_products_loading: false,
  bike_products_error: false,
  lmv_products_loading: false,
  lmv_products_error: false,
  bike_products_subcategory_loading: false,
  bike_products_subcategory_error: false,
  lmv_products_subcategory_loading: false,
  lmv_products_subcategory_error: false,
  bike_product_merchants_loading: false,
  bike_product_merchants_error: false,
  lmv_product_merchants_loading: false,
  lmv_product_merchants_error: false,
  feature_product_bike_loading: false,
  feature_product_lmv_loading: false,
  single_product_loading: false,
  single_product_error: false,
  get_product_by_merchant_lmv_loading: false,
  get_product_by_merchant_lmv_error: false,
  get_product_by_merchant_bike_loading: false,
  get_product_by_merchant_bike_error: false,
  bike_review_loading: false,
  bike_review_error: false,
  lmv_review_loading: false,
  lmv_review_error: false,
  bike_products: [],
  lmv_products: [],
  filtered_bike_products: [],
  filteres_lmv_products: [],
  bike_product_merchants: [],
  lmv_product_merchants: [],
  feature_product_bike: [],
  feature_product_lmv: [],
  single_product: {},
  merchant_product: {},
  bike_reviews: [],
  lmv_reviews: []
};

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBikeProducts = async (url) => {
    dispatch({ type: GET_BIKE_PRODUCTS });
    try {
      const response = await getData(url);
      const bike_products = response.data;
      dispatch({
        type: GET_BIKE_PRODUCTS_SUCCESS,
        payload: bike_products
      });
    } catch (error) {
      dispatch({ type: GET_BIKE_PRODUCTS_ERROR });
    }
  };

  const fetchLmvProducts = async (url) => {
    dispatch({ type: GET_LMV_PRODUCTS });
    try {
      const response = await getData(url);
      const lmv_products = response.data;
      dispatch({
        type: GET_LMV_PRODUCTS_SUCCESS,
        payload: lmv_products
      });
    } catch (error) {
      dispatch({ type: GET_LMV_PRODUCTS_ERROR });
    }
  };

  const filterSubcategoryBasedBikeProducts = async (url, id, systemDate) => {
    dispatch({ type: GET_SUBCATEGORY_BASED_BIKE_PRODUCTS });
    try {
      const response = await getData(
        `${url}?subcategoryId=${id}&&systemData=${systemDate}`
      );
      const bike_products = response.data;
      dispatch({
        type: GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_SUCCESS,
        payload: bike_products
      });
    } catch (error) {
      dispatch({ type: GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_ERROR });
    }
  };

  const filterSubcategoryBasedLMVProducts = async (url, id, systemDate) => {
    dispatch({ type: GET_SUBCATEGORY_BASED_LMV_PRODUCTS });
    try {
      const response = await getData(
        `${url}?subcategoryId=${id}&&systemData=${systemDate}`
      );
      const lmv_products = response.data;
      dispatch({
        type: GET_SUBCATEGORY_BASED_LMV_PRODUCTS_SUCCESS,
        payload: lmv_products
      });
    } catch (error) {
      dispatch({ type: GET_SUBCATEGORY_BASED_LMV_PRODUCTS_ERROR });
    }
  };

  const fetchBikeProductMerchants = async (url) => {
    dispatch({ type: GET_BIKE_PRODUCT_MERCHANTS });
    try {
      const response = await getData(url);
      const bike_product_merchants = response.data;
      dispatch({
        type: GET_BIKE_PRODUCT_MERCHANTS_SUCCESS,
        payload: bike_product_merchants
      });
    } catch (error) {
      dispatch({ type: GET_BIKE_PRODUCT_MERCHANTS_ERROR });
    }
  };

  const fetchLMVProductMerchants = async (url) => {
    dispatch({ type: GET_LMV_PRODUCT_MERCHANTS });
    try {
      const response = await getData(url);
      const lmv_product_merchants = response.data;
      dispatch({
        type: GET_LMV_PRODUCT_MERCHANTS_SUCCESS,
        payload: lmv_product_merchants
      });
    } catch (error) {
      dispatch({ type: GET_LMV_PRODUCT_MERCHANTS_ERROR });
    }
  };

  const fetchFeatureProductsBike = async (url) => {
    dispatch({ type: GET_BIKE_FEATURE_PRODUCTS });
    try {
      const response = await getData(url);
      const bike_feature_products = response.data;
      dispatch({
        type: GET_BIKE_FEATURE_PRODUCTS_SUCCESS,
        payload: bike_feature_products
      });
    } catch (error) {
      dispatch({ type: GET_BIKE_FEATURE_PRODUCTS_ERROR });
    }
  };

  const fetchFeatureProductsLMV = async (url) => {
    dispatch({ type: GET_LMV_FEATURE_PRODUCTS });
    try {
      const response = await getData(url);
      const lmv_feature_products = response.data;
      dispatch({
        type: GET_LMV_FEATURE_PRODUCTS_SUCCESS,
        payload: lmv_feature_products
      });
    } catch (error) {
      dispatch({ type: GET_LMV_FEATURE_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT });
    try {
      const response = await getData(url);
      const single_product = response.data;
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: single_product
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const fetchProductByLMVMerchant = async (url, id) => {
    dispatch({ type: GET_PRODUCT_BY_MERCHANT_LMV });
    try {
      const response = await getData(`${url}/${id}`);
      console.log(response);
      const lmvProduct = response.data;
      dispatch({
        type: GET_PRODUCT_BY_MERCHANT_LMV_SUCCESS,
        payload: lmvProduct
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_BY_MERCHANT_LMV_ERROR });
    }
  };

  const fetchProductByBikeMerchant = async (url, id) => {
    dispatch({ type: GET_PRODUCT_BY_MERCHANT_BIKE });
    try {
      const response = await getData(`${url}/${id}`);
      console.log(response);
      const bikeProduct = response.data;
      dispatch({
        type: GET_PRODUCT_BY_MERCHANT_BIKE_SUCCESS,
        payload: bikeProduct
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_BY_MERCHANT_BIKE_ERROR });
    }
  };

  const fetchBikeApprovedReviews = async (url) => {
    dispatch({ type: GET_BIKE_REVIEWS });
    try {
      const response = await getData(url);
      const reviews = response.data;
      dispatch({ type: GET_BIKE_REVIEWS_SUCCESS, payload: reviews });
    } catch (error) {
      dispatch({ type: GET_BIKE_REVIEWS_ERROR });
    }
  };

  const fetchLMVApprovedReviews = async (url) => {
    dispatch({ type: GET_LMV_REVIEWS });
    try {
      const response = await getData(url);
      const reviews = response.data;
      dispatch({ type: GET_LMV_REVIEWS_SUCCESS, payload: reviews });
    } catch (error) {
      dispatch({ type: GET_LMV_REVIEWS_ERROR });
    }
  };

  useEffect(() => {
    const currentDate = formatDateTime(new Date().toISOString());
    fetchBikeProducts(`${bike_products_url}?systemData=${currentDate}`);
    fetchLmvProducts(`${lmv_products_url}?systemData=${currentDate}`);
    fetchBikeProductMerchants(bike_product_merchant_url);
    fetchLMVProductMerchants(lmv_product_merchant_url);
    fetchFeatureProductsBike(bike_feature_product_url);
    fetchFeatureProductsLMV(lmv_feature_product_url);
    fetchBikeApprovedReviews(bike_review_url);
    fetchLMVApprovedReviews(lmv_review_url);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        fetchProductByLMVMerchant,
        fetchProductByBikeMerchant,
        filterSubcategoryBasedBikeProducts,
        filterSubcategoryBasedLMVProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
