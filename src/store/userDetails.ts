import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  details: null,
  error: null
}

const userSlice = createSlice({
  name: "loginDetails",
  initialState,
  reducers: {
    userDetailsRequest (state) {
      state.isLoading = true;
      state.error = null;
    },
    userDetailsSuccess (state, action) {
      state.isLoading = false;
      state.details = action.payload;
    },
    userDetailsFailed (state, action) {
      state.isLoading = false;
      state.details = null;
      state.error = action.payload
    },
    userLogout (state) {
      state.isLoading = false;
      state.details = null;
    }
  }
});

export const { userDetailsRequest, userDetailsFailed, userDetailsSuccess, userLogout } = userSlice.actions;
export default userSlice.reducer
