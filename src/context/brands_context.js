import { createContext, useContext, useEffect, useReducer } from "react";
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
import reducer from "../reducers/brands_reducer";
import { deleteData, getData, postData, putData } from "../utils/fetchData";
import { brand_url, vehicletype_url } from "../utils/constants";

const initialState = {
  brands_loading: false,
  brands_error: false,
  models_loading: false,
  models_error: false,
  vehicle_type_loading: false,
  vehicle_type_error: false,
  vehicle_loading: false,
  vehicle_error: false,
  customer_vehicle_loading: false,
  customer_vehicle_error: false,
  create_customer_vehicle_loading: false,
  create_customer_vehicle_error: false,
  update_customer_vehicle_loading: false,
  update_customer_vehicle_error: false,
  customer_vehicle_status_loading: false,
  customer_vehicle_status_error: false,
  delete_customer_vehicle_loading: false,
  delete_customer_vehicle_error: false,
  brands: [],
  models: [],
  vehicletype: [],
  vehicle: [],
  customer_vehicle: [],
  customer_vehicle_toggle: false
};

const BrandsContext = createContext();

export const BrandsProvider = ({ children }) => {
  const isLoggedIn = localStorage.getItem("jwt_token");
  const loggedInDetails = JSON.parse(localStorage.getItem("user_detail"));

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBrands = async (url) => {
    dispatch({ type: GET_BRANDS });
    try {
      const response = await getData(url);
      const brands = response.data;
      dispatch({ type: GET_BRANDS_SUCCESS, payload: brands });
    } catch (error) {
      dispatch({ type: GET_BRANDS_ERROR });
    }
  };

  const fetchModels = async (url, id) => {
    dispatch({ type: GET_MODELS });
    try {
      const response = await getData(`${url}?carModelId=${id}`);
      const models = response.data;
      dispatch({ type: GET_MODELS_SUCCESS, payload: models });
    } catch (error) {
      dispatch({ type: GET_MODELS_ERROR });
    }
  };

  const fetchVehicleType = async (url) => {
    dispatch({ type: GET_VEHICLE_TYPE });
    try {
      const response = await getData(url);
      const vehicletype = response.data;
      dispatch({ type: GET_VEHICLE_TYPE_SUCCESS, payload: vehicletype });
    } catch (error) {
      dispatch({ type: GET_VEHICLE_TYPE_ERROR });
    }
  };

  const fetchVehicle = async (url, id) => {
    dispatch({ type: GET_VEHICLE });
    try {
      const response = await getData(`${url}?carBrandId=${id}`);
      const vehicle = response.data;
      dispatch({ type: GET_VEHICLE_SUCCESS, payload: vehicle });
    } catch (error) {
      dispatch({ type: GET_VEHICLE_ERROR });
    }
  };

  const fetchCustomerVehicle = async (url, id, token) => {
    dispatch({ type: GET_CUSTOMER_VEHICLE });
    try {
      const response = await getData(
        `${url}?customer=${id}`,
        `Bearer ${token}`
      );
      const customerVehicle = response.data;
      dispatch({
        type: GET_CUSTOMER_VEHICLE_SUCCESS,
        payload: customerVehicle
      });
    } catch (error) {
      dispatch({ type: GET_CUSTOMER_VEHICLE_ERROR });
    }
  };

  const createCustomerVehicle = async (url, data, token) => {
    dispatch({ type: CREATE_CUSTOMER_VEHICLE });
    try {
      const response = await postData(url, data, `Bearer ${token}`);
      dispatch({ type: CREATE_CUSTOMER_VEHICLE_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: CREATE_CUSTOMER_VEHICLE_ERROR });
    }
  };

  const updateCustomerVehicle = async (url, id, data, token) => {
    dispatch({ type: UPDATE_CUSTOMER_VEHICLE });
    try {
      await putData(`${url}/${id}`, data, `Bearer ${token}`);
      dispatch({ type: UPDATE_CUSTOMER_VEHICLE_SUCCESS });
    } catch (error) {
      dispatch({ type: UPDATE_CUSTOMER_VEHICLE_ERROR });
    }
  };

  const updateCustomerVehicleStatus = async (url, data, token) => {
    console.log(url, data, token)
    dispatch({ type: CUSTOMER_VEHICLE_STATUS_UPDATE });
    try {
      await putData(url, data, token);
      dispatch({ type: CUSTOMER_VEHICLE_STATUS_UPDATE_SUCCESS });
    } catch (error) {
      dispatch({ type: CUSTOMER_VEHICLE_STATUS_UPDATE_ERROR });
    }
  };

  const deleteCustomerVehicle = async (url, id, token) => {
    dispatch({ type: DELETE_CUSTOMER_VEHICLE });
    try {
      await deleteData(`${url}/${id}`, token);
      dispatch({ type: DELETE_CUSTOMER_VEHICLE_SUCCESS });
    } catch (error) {
      dispatch({ type: DELETE_CUSTOMER_VEHICLE_ERROR });
    }
  };  

  useEffect(() => {
    fetchBrands(`${brand_url}`);
    fetchVehicleType(`${vehicletype_url}`);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchCustomerVehicle("customer-car", loggedInDetails?.id, isLoggedIn);
    }
  }, [state.customer_vehicle_toggle, isLoggedIn]);

  return (
    <BrandsContext.Provider
      value={{
        ...state,
        fetchModels,
        fetchVehicle,
        updateCustomerVehicleStatus,
        deleteCustomerVehicle,
        createCustomerVehicle,
        updateCustomerVehicle,
        fetchCustomerVehicle
      }}
    >
      {children}
    </BrandsContext.Provider>
  );
};

export const useBrandsContext = () => {
  return useContext(BrandsContext);
};
