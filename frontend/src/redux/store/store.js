import { configureStore } from "@reduxjs/toolkit";
import authhReducer from "../slices/authSlice";
const store = configureStore({
  reducer: {
    auth: authhReducer,
  },
});

export default store;
