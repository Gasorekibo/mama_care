import { configureStore } from "@reduxjs/toolkit";
import authhReducer from "../slices/authSlice";
import usersReducer from "../slices/userSlice";
const store = configureStore({
  reducer: {
    auth: authhReducer,
    users: usersReducer,
  },
});

export default store;
