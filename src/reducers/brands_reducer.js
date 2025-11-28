import {
  CREATE_CUSTOMER_VEHICLE,
  CREATE_CUSTOMER_VEHICLE_ERROR,
  CREATE_CUSTOMER_VEHICLE_SUCCESS,
  CUSTOMER_VEHICLE_STATUS_UPDATE,
  CUSTOMER_VEHICLE_STATUS_UPDATE_ERROR,
  CUSTOMER_VEHICLE_STATUS_UPDATE_SUCCESS,
  DELETE_CUSTOMER_VEHICLE,
  DELETE_CUSTOMER_VEHICLE_ERROR,
  DELETE_CUSTOMER_VEHICLE_SUCCESS,
  GET_BRANDS,
  GET_BRANDS_ERROR,
  GET_BRANDS_SUCCESS,
  GET_CUSTOMER_VEHICLE,
  GET_CUSTOMER_VEHICLE_ERROR,
  GET_CUSTOMER_VEHICLE_SUCCESS,
  GET_MODELS,
  GET_MODELS_ERROR,
  GET_MODELS_SUCCESS,
  GET_VEHICLE,
  GET_VEHICLE_ERROR,
  GET_VEHICLE_SUCCESS,
  GET_VEHICLE_TYPE,
  GET_VEHICLE_TYPE_ERROR,
  GET_VEHICLE_TYPE_SUCCESS,
  UPDATE_CUSTOMER_VEHICLE,
  UPDATE_CUSTOMER_VEHICLE_ERROR,
  UPDATE_CUSTOMER_VEHICLE_SUCCESS
} from "../actions";

const brands_reducer = (state, action) => {
  if (action.type === GET_BRANDS) {
    return { ...state, brands_loading: true };
  }
  if (action.type === GET_BRANDS_SUCCESS) {
    return { ...state, brands_loading: false, brands: action.payload };
  }
  if (action.type === GET_BRANDS_ERROR) {
    return { ...state, brands_error: true, brands_loading: false };
  }
  if (action.type === GET_MODELS) {
    return { ...state, models_loading: true };
  }
  if (action.type === GET_MODELS_SUCCESS) {
    return { ...state, models_loading: false, models: action.payload };
  }
  if (action.type === GET_MODELS_ERROR) {
    return { ...state, models_error: true, models_loading: false };
  }
  if (action.type === GET_VEHICLE_TYPE) {
    return { ...state, vehicle_type_loading: true };
  }
  if (action.type === GET_VEHICLE_TYPE_SUCCESS) {
    return {
      ...state,
      vehicle_type_loading: false,
      vehicletype: action.payload
    };
  }
  if (action.type === GET_VEHICLE_TYPE_ERROR) {
    return {
      ...state,
      vehicle_type_error: true,
      vehicle_type_loading: false
    };
  }
  if (action.type === GET_VEHICLE) {
    return { ...state, vehicle_loading: true };
  }
  if (action.type === GET_VEHICLE_SUCCESS) {
    return { ...state, vehicle_loading: false, vehicle: action.payload };
  }
  if (action.type === GET_VEHICLE_ERROR) {
    return { ...state, vehicle_error: true, vehicle_loading: false };
  }
  if (action.type === GET_CUSTOMER_VEHICLE) {
    return { ...state, customer_vehicle_loading: true };
  }
  if (action.type === GET_CUSTOMER_VEHICLE_SUCCESS) {
    return {
      ...state,
      customer_vehicle_loading: false,
      customer_vehicle: action.payload
    };
  }
  if (action.type === GET_CUSTOMER_VEHICLE_ERROR) {
    return {
      ...state,
      customer_vehicle_error: true,
      customer_vehicle_loading: false
    };
  }
  if (action.type === CREATE_CUSTOMER_VEHICLE) {
    return { ...state, create_customer_vehicle_loading: true };
  }
  if (action.type === CREATE_CUSTOMER_VEHICLE_SUCCESS) {
    return {
      ...state,
      create_customer_vehicle_loading: false,
      customer_vehicle: [...state.customer_vehicle, action.payload],
      customer_vehicle_toggle: !state.customer_vehicle_toggle
    };
  }
  if (action.type === CREATE_CUSTOMER_VEHICLE_ERROR) {
    return {
      ...state,
      create_customer_vehicle_error: true,
      create_customer_vehicle_loading: false
    };
  }
  if (action.type === UPDATE_CUSTOMER_VEHICLE) {
    return { ...state, update_customer_vehicle_loading: true };
  }
  if (action.type === UPDATE_CUSTOMER_VEHICLE_SUCCESS) {
    return {
      ...state,
      update_customer_vehicle_loading: false,
      customer_vehicle_toggle: !state.customer_vehicle_toggle
    };
  }
  if (action.type === UPDATE_CUSTOMER_VEHICLE_ERROR) {
    return {
      ...state,
      update_customer_vehicle_error: true,
      update_customer_vehicle_loading: false
    };
  }
  if (action.type === CUSTOMER_VEHICLE_STATUS_UPDATE) {
    return { ...state, customer_vehicle_status_loading: true };
  }
  if (action.type === CUSTOMER_VEHICLE_STATUS_UPDATE_SUCCESS) {
    return {
      ...state,
      customer_vehicle_status_loading: false,
      customer_vehicle_toggle: !state.customer_vehicle_toggle
    };
  }
  if (action.type === CUSTOMER_VEHICLE_STATUS_UPDATE_ERROR) {
    return {
      ...state,
      customer_vehicle_status_error: true,
      customer_vehicle_status_loading: false
    };
  }
  if (action.type === DELETE_CUSTOMER_VEHICLE) {
    return { ...state, delete_customer_vehicle_loading: true };
  }
  if (action.type === DELETE_CUSTOMER_VEHICLE_SUCCESS) {
    return {
      ...state,
      delete_customer_vehicle_loading: false,
      customer_vehicle_toggle: !state.customer_vehicle_toggle
    };
  }
  if (action.type === DELETE_CUSTOMER_VEHICLE_ERROR) {
    return {
      ...state,
      delete_customer_vehicle_error: true,
      delete_customer_vehicle_loading: false
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default brands_reducer;
