import { createSlice } from "@reduxjs/toolkit";
import { lclStrgKeys } from "../../configs/AppConfigs";

export const authSlice = createSlice({
  name: "authAction",
  initialState: localStorage.getItem(lclStrgKeys.token) ? true : false,
  reducers: {
    login: (state) => {
      return true;
    },
    logout: (state) => {
      return false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
