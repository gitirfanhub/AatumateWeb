import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_SUCCESS,
  DELETE_CART_ITEM,
  DELETE_CART_ITEM_ERROR,
  DELETE_CART_ITEM_SUCCESS,
  GET_BIKE_ORDERS,
  GET_BIKE_ORDERS_ERROR,
  GET_BIKE_ORDERS_SUCCESS,
  GET_CART,
  GET_CART_ERROR,
  GET_CART_SUCCESS,
  GET_LMV_ORDERS,
  GET_LMV_ORDERS_ERROR,
  GET_LMV_ORDERS_SUCCESS,
  GET_SINGLE_ORDER,
  GET_SINGLE_ORDER_ERROR,
  GET_SINGLE_ORDER_SUCCESS,
  TOTAL_CART_ITEMS
} from "../actions";
import { deleteData, getData, postData } from "../utils/fetchData";

const initialState = {
  post_cart_loading: false,
  post_cart_error: false,
  get_cart_loading: false,
  get_cart_error: false,
  delete_cart_item_loading: false,
  delete_cart_item_error: false,
  get_bike_orders_loading: false,
  get_bike_orders_error: false,
  get_lmv_orders_loading: false,
  get_lmv_orders_error: false,
  single_order_loading: false,
  single_order_error: false,
  cart: [],
  total_items: 0,
  amount: 0,
  bike_orders: [],
  lmv_orders: [],
  single_order: {},
  update_cart: false
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const customerDetails = JSON.parse(localStorage.getItem("user_detail"));
  const token = localStorage.getItem("jwt_token");

  const addToCart = async (url, data) => {
    dispatch({ type: ADD_TO_CART });
    try {
      await postData(url, data);
      dispatch({ type: ADD_TO_CART_SUCCESS });
    } catch (error) {
      dispatch({ type: ADD_TO_CART_ERROR });
    }
  };

  const getCart = async (url, id) => {
    dispatch({ type: GET_CART });
    try {
      const response = await getData(`${url}?customer=${id}`);
      dispatch({ type: GET_CART_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_CART_ERROR });
    }
  };

  const deleteFromCart = async (url, id) => {
    dispatch({ type: DELETE_CART_ITEM });
    try {
      await deleteData(`${url}/${id}`);
      dispatch({ type: DELETE_CART_ITEM_SUCCESS });
    } catch (error) {
      dispatch({ type: DELETE_CART_ITEM_ERROR });
    }
  };

  const totalCartItems = () => {
    dispatch({ type: TOTAL_CART_ITEMS });
  };

  const getBikeOrders = async (url) => {
    dispatch({ type: GET_BIKE_ORDERS });
    try {
      const response = await getData(url);
      const orders = response.data;
      dispatch({ type: GET_BIKE_ORDERS_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({ type: GET_BIKE_ORDERS_ERROR });
    }
  };

  const getLMVOrders = async (url) => {
    dispatch({ type: GET_LMV_ORDERS });
    try {
      const response = await getData(url);
      const orders = response.data;
      dispatch({ type: GET_LMV_ORDERS_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({ type: GET_LMV_ORDERS_ERROR });
    }
  };

  const singleOrder = async (url, id) => {
    dispatch({ type: GET_SINGLE_ORDER });
    try {
      const response = await getData(`${url}/${id}`);
      const order = response.data;
      dispatch({ type: GET_SINGLE_ORDER_SUCCESS, payload: order });
    } catch (error) {
      dispatch({ type: GET_SINGLE_ORDER_ERROR });
    }
  };

  useEffect(() => {
    if (token) {
      getCart("add-to-cart", customerDetails.id);
      getBikeOrders(`bike-order?customerId=${customerDetails.id}`);
      getLMVOrders(`lmv-order?customerId=${customerDetails.id}`);
    }
  }, [state.update_cart, token]);

  useEffect(() => {
    totalCartItems();
  }, [state.cart, token]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        deleteFromCart,
        singleOrder,
        totalCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
