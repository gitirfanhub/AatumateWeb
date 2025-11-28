import { createContext, useContext, useEffect, useReducer } from "react";
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
import reducer from "../reducers/workshop_reducer";
import {
  bike_workshop_url,
  lmv_workshop_url,
  nearby_bike_workshop_url,
  nearby_lmv_workshop_url
} from "../utils/constants";
import { params_url } from "../utils/constants";
import { getData } from "../utils/fetchData";

const initialState = {
  nearby_bike_workshop_loading: false,
  nearby_bike_workshop_error: false,
  nearby_lmv_workshop_loading: false,
  nearby_lmv_workshop_error: false,
  bike_workshop_loading: false,
  bike_workshop_error: false,
  lmv_workshop_loading: false,
  lmv_workshop_error: false,
  nearby_bike_workshop: [],
  nearby_lmv_workshop: [],
  bike_workshop: [],
  lmv_workshop: [],
  parameters_loading: false,
  parameters_error: false,
  parameters: []
};
const WorkshopContext = createContext();

export const WorkshopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNearbyBikeWorkshops = async (url) => {
    dispatch({ type: GET_NEARBY_BIKE_WORKSHOP });
    try {
      const response = await getData(url);
      const nearby_bike_workshop = response.data;
      dispatch({
        type: GET_NEARBY_BIKE_WORKSHOP_SUCCESS,
        payload: nearby_bike_workshop
      });
    } catch (error) {
      dispatch({ type: GET_NEARBY_BIKE_WORKSHOP_ERROR });
    }
  };

  const fetchNearbyLMVWorkshops = async (url) => {
    dispatch({ type: GET_NEARBY_LMV_WORKSHOP });
    try {
      const response = await getData(url);
      const nearby_lmv_workshop = response.data;
      dispatch({
        type: GET_NEARBY_LMV_WORKSHOP_SUCCESS,
        payload: nearby_lmv_workshop
      });
    } catch (error) {
      dispatch({ type: GET_NEARBY_LMV_WORKSHOP_ERROR });
    }
  };

  const fetchBikeWorkshops = async (url) => {
    dispatch({ type: GET_BIKE_WORKSHOP });
    try {
      const response = await getData(url);
      const bike_workshop = response.data;
      dispatch({ type: GET_BIKE_WORKSHOP_SUCCESS, payload: bike_workshop });
    } catch (error) {
      dispatch({ type: GET_BIKE_WORKSHOP_ERROR });
    }
  };

  const fetchLMVWorkshops = async (url) => {
    dispatch({ type: GET_LMV_WORKSHOP });
    try {
      const response = await getData(url);
      const lmv_workshop = response.data;
      dispatch({ type: GET_LMV_WORKSHOP_SUCCESS, payload: lmv_workshop });
    } catch (error) {
      dispatch({ type: GET_LMV_WORKSHOP_ERROR });
    }
  };

  const fetchParameters = async (url) => {
    dispatch({ type: GET_PARAMETERS });
    try {
      const response = await getData(url);
      const parameters = response.data;
      dispatch({ type: GET_PARAMETERS_SUCCESS, payload: parameters });
    } catch (error) {
      dispatch({ type: GET_PARAMETERS_ERROR });
    }
  };

  useEffect(() => {
    fetchNearbyBikeWorkshops(nearby_bike_workshop_url);
    fetchNearbyLMVWorkshops(nearby_lmv_workshop_url);
    fetchBikeWorkshops(bike_workshop_url);
    fetchLMVWorkshops(lmv_workshop_url);
    fetchParameters(`${params_url}`);
  }, []);

  return (
    <WorkshopContext.Provider
      value={{ ...state, fetchNearbyBikeWorkshops, fetchNearbyLMVWorkshops }}
    >
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshopContext = () => {
  return useContext(WorkshopContext);
};
