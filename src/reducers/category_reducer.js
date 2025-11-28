import {
  GET_BIKE_CATEGORY,
  GET_BIKE_CATEGORY_ERROR,
  GET_BIKE_CATEGORY_SUCCESS,
  GET_LMV_CATEGORY,
  GET_LMV_CATEGORY_ERROR,
  GET_LMV_CATEGORY_SUCCESS
} from "../actions";

const category_reducer = (state, action) => {
  if (action.type === GET_BIKE_CATEGORY) {
    return { ...state, bike_category_loading: true };
  }
  if (action.type === GET_BIKE_CATEGORY_SUCCESS) {
    return {
      ...state,
      bike_category_loading: false,
      bike_category: action.payload
    };
  }
  if (action.type === GET_BIKE_CATEGORY_ERROR) {
    return {
      ...state,
      bike_category_error: true,
      bike_category_loading: false
    };
  }
  if (action.type === GET_LMV_CATEGORY) {
    return { ...state, lmv_category_loading: true };
  }
  if (action.type === GET_LMV_CATEGORY_SUCCESS) {
    return {
      ...state,
      lmv_category_loading: false,
      lmv_category: action.payload
    };
  }
  if (action.type === GET_LMV_CATEGORY_ERROR) {
    return {
      ...state,
      lmv_category_error: true,
      lmv_category_loading: false
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default category_reducer;
