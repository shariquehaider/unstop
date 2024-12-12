import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/store/login";
import detailsReducer from "@/store/userDetails";


const store = configureStore({
  reducer: {
    loginReducer,
    detailsReducer
  }
});

export default store;