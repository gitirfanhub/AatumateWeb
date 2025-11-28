import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  GET_BIKE_CATEGORY,
  GET_BIKE_CATEGORY_ERROR,
  GET_BIKE_CATEGORY_SUCCESS,
  GET_LMV_CATEGORY,
  GET_LMV_CATEGORY_ERROR,
  GET_LMV_CATEGORY_SUCCESS
} from "../actions";
import reducer from "../reducers/category_reducer";
import { bike_category_url, lmv_category_url } from "../utils/constants";
import { getData } from "../utils/fetchData";
const initialState = {
  bike_category_loading: false,
  bike_category_error: false,
  lmv_category_loading: false,
  lmv_category_error: false,
  bike_category: [],
  lmv_category: []
};

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBikeCategories = async (url) => {
    dispatch({ type: GET_BIKE_CATEGORY });
    try {
      const response = await getData(url);
      const bike_categories = response.data;
      dispatch({ type: GET_BIKE_CATEGORY_SUCCESS, payload: bike_categories });
    } catch (error) {
      dispatch({ type: GET_BIKE_CATEGORY_ERROR });
    }
  };
  const fetchLMVCategories = async (url) => {
    dispatch({ type: GET_LMV_CATEGORY });
    try {
      const response = await getData(url);
      const lmv_categories = response.data;
      dispatch({ type: GET_LMV_CATEGORY_SUCCESS, payload: lmv_categories });
    } catch (error) {
      dispatch({ type: GET_LMV_CATEGORY_ERROR });
    }
  };

  useEffect(() => {
    fetchBikeCategories(bike_category_url);
    fetchLMVCategories(lmv_category_url);
  }, []);

  return (
    <CategoryContext.Provider value={{ ...state }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
