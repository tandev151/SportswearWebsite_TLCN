import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../api/userAPI";

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (info) => {
    const response = await userAPI.updateUserInfo(info);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: {},
});

export default userSlice.reducer;
