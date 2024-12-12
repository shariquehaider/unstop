import { userLoginRequest, userLoginSuccess, userLoginFailed, Logout } from "@/store/login";
import { userLogout } from "@/store/userDetails";
import { Dispatch } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";


interface User {
  username: string,
  email: string,
  password: string
}

export const loginDispatchAction = (user: User, rememberMe: boolean) => async (dispatch: Dispatch) => {
  dispatch(userLoginRequest());
  try {
    const response: any = await fetch ("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    const loginDetails = await response.json();
    if (loginDetails.accessToken) {
      const data = {
        firstName: loginDetails.firstName,
        lastName: loginDetails.lastName,
        email: loginDetails.email,
        gender: loginDetails.gender,
      }
      if (rememberMe) {
        localStorage.setItem('authToken', loginDetails.accessToken);
        localStorage.setItem('details', JSON.stringify(data));
      } else {
        sessionStorage.setItem('authToken', loginDetails.accessToken);
        sessionStorage.setItem('details', JSON.stringify(data));
      }
      
      dispatch(userLoginSuccess());
      return true;
    } else {
      throw new Error(loginDetails.message);
    }
  } catch (error) {
    dispatch(userLoginFailed(error));
    return false;
  }
};


export const userLogoutAction = () => (dispatch : Dispatch) => {
  dispatch(Logout());
  dispatch(userLogout());
  localStorage.removeItem('authToken');
  redirect("/");
}