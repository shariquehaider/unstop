import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuthenticated: localStorage.getItem('authToken') || sessionStorage.getItem('authToken')? true : false,
  error: null
}

const loginSlice = createSlice({
  name: "loginDetails",
  initialState,
  reducers: {
    userLoginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    userLoginSuccess(state) {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
    },
    userLoginFailed(state, action) {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    Logout(state) {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});

export const { userLoginRequest, userLoginFailed, userLoginSuccess, Logout } = loginSlice.actions;
export default loginSlice.reducer;