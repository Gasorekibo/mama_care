import { configureStore } from "@reduxjs/toolkit";
import authhReducer from "../slices/authSlice";
import usersReducer from "../slices/userSlice";
import educationReducer from "../slices/educationSlice";
import hospitalReducer from "../slices/hospitalSlice";
const store = configureStore({
  reducer: {
    auth: authhReducer,
    users: usersReducer,
    education: educationReducer,
    hospitals: hospitalReducer,
  },
});

export default store;
