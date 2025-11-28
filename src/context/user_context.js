import { createContext, useContext, useReducer } from "react";
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actions";
import reducer from "../reducers/user_reducer";
import { postData } from "../utils/fetchData";

const initialState = {
  user_login_loading: false,
  user_login_error: false,
  user_details: {},
  token: "",
  is_loggedin: false
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = async (url, data) => {
    dispatch({ type: USER_LOGIN });
    try {
      const response = await postData(url, data);
      if (response.data) {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: USER_LOGIN_ERROR });
      }
    } catch (error) {
      dispatch({ type: USER_LOGIN_ERROR });
    }
  };

  return (
    <UserContext.Provider value={{ ...state, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
