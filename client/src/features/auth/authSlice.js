import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/authAPI";

export const login = createAsyncThunk("auth/login", async (user) => {
  const response = await authAPI.login(user);
  return response;
});
export const register = createAsyncThunk("auth/register", async (user) => {
  const response = await authAPI.register(user);
  return response;
});
export const logout = createAsyncThunk("auth/logout", async (user) => {
  const response = await authAPI.logout(user);
  return response;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    authenticate: false,
    authenticating: false,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    isUserLoggedIn: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        const user = JSON.parse(localStorage.getItem("user"));
        state.user = user;
        state.token = token;
        state.authenticate = true;
      } else {
        state.error = "Login failed";
      }
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.authenticate = true;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      console.log(action.payload);
    },
  },
});
export const { isUserLoggedIn } = authSlice.actions;

export default authSlice.reducer;
