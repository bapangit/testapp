import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { openClient } from "../../apiClient";

export const getUser = createAsyncThunk("GET_USER", async () => {
  return openClient.post("getuser").then((res) => res.data);
});

const userSlice = createSlice({
  name: "getUser",
  initialState: {
    loading: false,
    data: {},
    error: null,
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
