import {
  GET_BIKE_PRODUCTS,
  GET_BIKE_PRODUCTS_SUCCESS,
  GET_BIKE_PRODUCTS_ERROR,
  GET_LMV_PRODUCTS,
  GET_LMV_PRODUCTS_SUCCESS,
  GET_LMV_PRODUCTS_ERROR,
  GET_BIKE_FEATURE_PRODUCTS,
  GET_BIKE_FEATURE_PRODUCTS_SUCCESS,
  GET_BIKE_FEATURE_PRODUCTS_ERROR,
  GET_LMV_FEATURE_PRODUCTS,
  GET_LMV_FEATURE_PRODUCTS_SUCCESS,
  GET_LMV_FEATURE_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_BIKE_PRODUCT_MERCHANTS,
  GET_BIKE_PRODUCT_MERCHANTS_SUCCESS,
  GET_BIKE_PRODUCT_MERCHANTS_ERROR,
  GET_LMV_PRODUCT_MERCHANTS,
  GET_LMV_PRODUCT_MERCHANTS_SUCCESS,
  GET_LMV_PRODUCT_MERCHANTS_ERROR,
  GET_PRODUCT_BY_MERCHANT_LMV,
  GET_PRODUCT_BY_MERCHANT_LMV_SUCCESS,
  GET_PRODUCT_BY_MERCHANT_LMV_ERROR,
  GET_PRODUCT_BY_MERCHANT_BIKE,
  GET_PRODUCT_BY_MERCHANT_BIKE_SUCCESS,
  GET_PRODUCT_BY_MERCHANT_BIKE_ERROR,
  GET_SUBCATEGORY_BASED_BIKE_PRODUCTS,
  GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_SUCCESS,
  GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_ERROR,
  GET_SUBCATEGORY_BASED_LMV_PRODUCTS,
  GET_SUBCATEGORY_BASED_LMV_PRODUCTS_SUCCESS,
  GET_SUBCATEGORY_BASED_LMV_PRODUCTS_ERROR,
  GET_BIKE_REVIEWS,
  GET_BIKE_REVIEWS_SUCCESS,
  GET_BIKE_REVIEWS_ERROR,
  GET_LMV_REVIEWS,
  GET_LMV_REVIEWS_SUCCESS,
  GET_LMV_REVIEWS_ERROR
} from "../actions";

const product_reducer = (state, action) => {
  if (action.type === GET_BIKE_PRODUCTS) {
    return { ...state, bike_products_loading: true };
  }
  if (action.type === GET_BIKE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      bike_products_loading: false,
      bike_products: action.payload
    };
  }
  if (action.type === GET_BIKE_PRODUCTS_ERROR) {
    return {
      ...state,
      bike_products_error: true,
      bike_products_loading: false
    };
  }
  if (action.type === GET_LMV_PRODUCTS) {
    return { ...state, lmv_products_loading: true };
  }
  if (action.type === GET_LMV_PRODUCTS_SUCCESS) {
    return {
      ...state,
      lmv_products_loading: false,
      lmv_products: action.payload
    };
  }
  if (action.type === GET_LMV_PRODUCTS_ERROR) {
    return {
      ...state,
      lmv_products_error: true,
      lmv_products_loading: false
    };
  }
  if (action.type === GET_SUBCATEGORY_BASED_BIKE_PRODUCTS) {
    return { ...state, bike_products_subcategory_loading: true };
  }
  if (action.type === GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      bike_products_subcategory_loading: false,
      filtered_bike_products: action.payload
    };
  }
  if (action.type === GET_SUBCATEGORY_BASED_BIKE_PRODUCTS_ERROR) {
    return {
      ...state,
      bike_products_subcategory_loading: false,
      bike_products_subcategory_error: true
    };
  }
  if (action.type === GET_SUBCATEGORY_BASED_LMV_PRODUCTS) {
    return {
      ...state,
      lmv_products_subcategory_loading: true
    };
  }
  if (action.type === GET_SUBCATEGORY_BASED_LMV_PRODUCTS_SUCCESS) {
    return {
      ...state,
      lmv_products_subcategory_loading: false,
      filtered_lmv_products: action.payload
    };
  }
  if (action.type === GET_SUBCATEGORY_BASED_LMV_PRODUCTS_ERROR) {
    return {
      ...state,
      lmv_products_subcategory_loading: false,
      lmv_products_subcategory_error: true
    };
  }
  if (action.type === GET_BIKE_PRODUCT_MERCHANTS) {
    return { ...state, bike_product_merchants_loading: true };
  }
  if (action.type === GET_BIKE_PRODUCT_MERCHANTS_SUCCESS) {
    return {
      ...state,
      bike_product_merchants_loading: false,
      bike_product_merchants: action.payload
    };
  }
  if (action.type === GET_BIKE_PRODUCT_MERCHANTS_ERROR) {
    return {
      ...state,
      bike_product_merchants_error: true,
      bike_product_merchants_loading: false
    };
  }
  if (action.type === GET_LMV_PRODUCT_MERCHANTS) {
    return { ...state, lmv_product_merchants_loading: true };
  }
  if (action.type === GET_LMV_PRODUCT_MERCHANTS_SUCCESS) {
    return {
      ...state,
      lmv_product_merchants_loading: false,
      lmv_product_merchants: action.payload
    };
  }
  if (action.type === GET_LMV_PRODUCT_MERCHANTS_ERROR) {
    return {
      ...state,
      lmv_product_merchants_error: true,
      lmv_product_merchants_loading: false
    };
  }
  if (action.type === GET_BIKE_FEATURE_PRODUCTS) {
    return { ...state, feature_product_bike_loading: true };
  }
  if (action.type === GET_BIKE_FEATURE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      feature_product_bike_loading: false,
      feature_product_bike: action.payload
    };
  }
  if (action.type === GET_BIKE_FEATURE_PRODUCTS_ERROR) {
    return {
      ...state,
      feature_product_bike_error: true,
      feature_product_bike_loading: false
    };
  }
  if (action.type === GET_LMV_FEATURE_PRODUCTS) {
    return { ...state, feature_product_lmv_loading: true };
  }
  if (action.type === GET_LMV_FEATURE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      feature_product_lmv_loading: false,
      feature_product_lmv: action.payload
    };
  }
  if (action.type === GET_LMV_FEATURE_PRODUCTS_ERROR) {
    return {
      ...state,
      feature_product_lmv_error: true,
      feature_product_lmv_loading: false
    };
  }
  if (action.type === GET_SINGLE_PRODUCT) {
    return { ...state, single_product_loading: true };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false
    };
  }
  if (action.type === GET_PRODUCT_BY_MERCHANT_LMV) {
    return { ...state, get_product_by_merchant_lmv_loading: true };
  }
  if (action.type === GET_PRODUCT_BY_MERCHANT_LMV_SUCCESS) {
    return {
      ...state,
      get_product_by_merchant_lmv_loading: false,
      merchant_product: action.payload
    };
  }
  if (action.type === GET_PRODUCT_BY_MERCHANT_LMV_ERROR) {
    return {
      ...state,
      get_product_by_merchant_lmv_loading: false,
      get_product_by_merchant_lmv_error: true
    };
  }
  if (action.type === GET_PRODUCT_BY_MERCHANT_BIKE) {
    return { ...state, get_product_by_merchant_bike_loading: true };
  }
  if (action.type === GET_PRODUCT_BY_MERCHANT_BIKE_SUCCESS) {
    return {
      ...state,
      get_product_by_merchant_bike_loading: false,
      merchant_product: action.payload
    };
  }
  if (action.type === GET_PRODUCT_BY_MERCHANT_BIKE_ERROR) {
    return {
      ...state,
      get_product_by_merchant_bike_loading: false,
      get_product_by_merchant_bike_error: true
    };
  }
  if (action.type === GET_BIKE_REVIEWS) {
    return { ...state, bike_review_loading: true };
  }
  if (action.type === GET_BIKE_REVIEWS_SUCCESS) {
    return {
      ...state,
      bike_review_loading: false,
      bike_reviews: action.payload
    };
  }
  if (action.type === GET_BIKE_REVIEWS_ERROR) {
    return { ...state, bike_review_error: true, bike_review_loading: false };
  }
  if (action.type === GET_LMV_REVIEWS) {
    return { ...state, lmv_review_loading: true };
  }
  if (action.type === GET_LMV_REVIEWS_SUCCESS) {
    return { ...state, lmv_review_loading: false, lmv_reviews: action.payload };
  }
  if (action.type === GET_LMV_REVIEWS_ERROR) {
    return { ...state, lmv_review_error: true, lmv_review_loading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
