import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

export const getAllUserAction = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue, getState }) => {
    const user = getState().auth.auth;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    try {
      const response = await axios.get(`${baseUrl}/users`, config);
      
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      } else {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
