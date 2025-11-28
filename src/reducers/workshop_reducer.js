import {
  GET_BIKE_WORKSHOP,
  GET_BIKE_WORKSHOP_ERROR,
  GET_BIKE_WORKSHOP_SUCCESS,
  GET_LMV_WORKSHOP,
  GET_LMV_WORKSHOP_ERROR,
  GET_LMV_WORKSHOP_SUCCESS,
  GET_NEARBY_BIKE_WORKSHOP,
  GET_NEARBY_BIKE_WORKSHOP_ERROR,
  GET_NEARBY_BIKE_WORKSHOP_SUCCESS,
  GET_NEARBY_LMV_WORKSHOP,
  GET_NEARBY_LMV_WORKSHOP_ERROR,
  GET_NEARBY_LMV_WORKSHOP_SUCCESS,
  GET_PARAMETERS,
  GET_PARAMETERS_ERROR,
  GET_PARAMETERS_SUCCESS
} from "../actions";

const workshop_reducer = (state, action) => {
  if (action.type === GET_BIKE_WORKSHOP) {
    return { ...state, bike_workshop_loading: false };
  }
  if (action.type === GET_NEARBY_BIKE_WORKSHOP) {
    return { ...state, nearby_bike_workshop_loading: false };
  }
  if (action.type === GET_NEARBY_BIKE_WORKSHOP_SUCCESS) {
    return {
      ...state,
      nearby_bike_workshop_loading: false,
      nearby_bike_workshop: action.payload
    };
  }
  if (action.type === GET_NEARBY_BIKE_WORKSHOP_ERROR) {
    return {
      ...state,
      nearby_bike_workshop_error: true,
      nearby_bike_workshop_loading: false
    };
  }
  if (action.type === GET_NEARBY_LMV_WORKSHOP) {
    return { ...state, nearby_lmv_workshop_loading: true };
  }
  if (action.type === GET_NEARBY_LMV_WORKSHOP_SUCCESS) {
    return {
      ...state,
      nearby_lmv_workshop_loading: false,
      nearby_lmv_workshop: action.payload
    };
  }
  if (action.type === GET_NEARBY_LMV_WORKSHOP_ERROR) {
    return {
      ...state,
      nearby_lmv_workshop_error: true,
      nearby_lmv_workshop_loading: false
    };
  }
  if (action.type === GET_BIKE_WORKSHOP_SUCCESS) {
    return {
      ...state,
      bike_workshop_loading: false,
      bike_workshop: action.payload
    };
  }
  if (action.type === GET_BIKE_WORKSHOP_ERROR) {
    return {
      ...state,
      bike_workshop_error: true,
      bike_workshop_loading: false
    };
  }
  if (action.type === GET_LMV_WORKSHOP) {
    return { ...state, lmv_workshop_loading: false };
  }
  if (action.type === GET_LMV_WORKSHOP_SUCCESS) {
    return {
      ...state,
      lmv_workshop_loading: false,
      lmv_workshop: action.payload
    };
  }
  if (action.type === GET_LMV_WORKSHOP_ERROR) {
    return {
      ...state,
      lmv_workshop_error: true,
      lmv_workshop_loading: false
    };
  }
  if (action.type === GET_PARAMETERS) {
    return { ...state, parameters_loading: false };
  }
  if (action.type === GET_PARAMETERS_SUCCESS) {
    return { ...state, parameters_loading: false, parameters: action.payload };
  }
  if (action.type === GET_PARAMETERS_ERROR) {
    return { ...state, parameters_error: true, parameters_loading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default workshop_reducer;
