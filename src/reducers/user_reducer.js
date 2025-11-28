import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actions";

const user_reducer = (state, action) => {
  if (action.type === USER_LOGIN) {
    return { ...state, user_login_loading: true };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      user_login_loading: false,
      user_details: action.payload,
      token: action.payload.token,
      is_loggedin: true
    };
  }
  if (action.type === USER_LOGIN_ERROR) {
    return { ...state, user_login_error: true, user_login_loading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
