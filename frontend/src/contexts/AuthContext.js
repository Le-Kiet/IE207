import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constant";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  const loginUser = async (userForm) => {
    try {
      console.log(0);
      console.log(axios.post("http://localhost:5000/api/auth/login", userForm));
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userForm
      );
      console.log(1);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      console.log(1);
      return response.data;
    } catch (error) {
      console.log(2);
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  //Context data
  const authContextData = { loginUser };

  //Return Provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
