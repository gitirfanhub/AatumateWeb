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

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    return { ...state, post_cart_loading: true };
  }
  if (action.type === ADD_TO_CART_SUCCESS) {
    return {
      ...state,
      post_cart_loading: false,
      update_cart: !state.update_cart
    };
  }
  if (action.type === ADD_TO_CART_ERROR) {
    return { ...state, post_cart_loading: false, post_cart_error: true };
  }
  if (action.type === GET_CART) {
    return { ...state, get_cart_loading: true };
  }
  if (action.type === GET_CART_SUCCESS) {
    return {
      ...state,
      get_cart_loading: false,
      cart: action.payload.map((obj) => ({ ...obj, selected: false })),
      total_items: state.cart.length
    };
  }
  if (action.type === GET_CART_ERROR) {
    return { ...state, get_cart_loading: false, get_cart_error: true };
  }
  if (action.type === DELETE_CART_ITEM) {
    return { ...state, delete_cart_item_loading: true };
  }
  if (action.type === DELETE_CART_ITEM_SUCCESS) {
    return {
      ...state,
      delete_cart_item_loading: false,
      update_cart: !state.update_cart,
      total_items: state.cart.length
    };
  }
  if (action.type === DELETE_CART_ITEM_ERROR) {
    return {
      ...state,
      delete_cart_item_loading: false,
      delete_cart_item_error: true
    };
  }
  if (action.type === TOTAL_CART_ITEMS) {
    return { ...state, total_items: state.cart.length };
  }
  if (action.type === GET_BIKE_ORDERS) {
    return { ...state, get_bike_orders_loading: true };
  }
  if (action.type === GET_BIKE_ORDERS_SUCCESS) {
    return {
      ...state,
      get_bike_orders_loading: false,
      bike_orders: action.payload
    };
  }
  if (action.type === GET_BIKE_ORDERS_ERROR) {
    return {
      ...state,
      get_bike_orders_loading: false,
      get_bike_orders_error: true
    };
  }
  if (action.type === GET_LMV_ORDERS) {
    return { ...state, get_lmv_orders_loading: true };
  }
  if (action.type === GET_LMV_ORDERS_SUCCESS) {
    return {
      ...state,
      get_lmv_orders_loading: false,
      lmv_orders: action.payload
    };
  }
  if (action.type === GET_LMV_ORDERS_ERROR) {
    return {
      ...state,
      get_lmv_orders_loading: false,
      get_lmv_orders_error: true
    };
  }
  if (action.type === GET_SINGLE_ORDER) {
    return { ...state, single_order_loading: true };
  }
  if (action.type === GET_SINGLE_ORDER_SUCCESS) {
    return {
      ...state,
      single_order_loading: false,
      single_order: action.payload
    };
  }
  if (action.type === GET_SINGLE_ORDER_ERROR) {
    return {
      ...state,
      single_order_loading: false,
      single_order_error: true
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
