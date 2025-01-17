import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

export const getAllHospitalAction = createAsyncThunk(
  "hospital/getAllHospital",
  async (_, { rejectWithValue, getState }) => {
    const user = getState()?.auth?.auth;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.access_token}`,
      },
    };

    try {
      const response = await axios.get(`${baseUrl}/facility`, config);
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

const hospitalSlice = createSlice({
  name: "hospital",
  initialState: {
    hospitals: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllHospitalAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllHospitalAction.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitals = action.payload;
      })
      .addCase(getAllHospitalAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default hospitalSlice.reducer;
