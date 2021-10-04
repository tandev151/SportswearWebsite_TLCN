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

export const loginByGoogle = createAsyncThunk("auth/google", async (token) => {
  const response = await authAPI.loginByGoogle(token);
  return response;
});

const initialState = {
  user: null,
  authenticate: false,
  authenticating: false,
  token: null,
  loading: false,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
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
      console.log(action);
      state.error = action.error.message;
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
    [logout.pending]: (state) => {
      state.loading = true;
    },
    [logout.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [logout.fulfilled]: (state) => {
      state.loading = true;
      state.authenticate = false;
      state = initialState;
      localStorage.clear();
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.authenticate = true;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [loginByGoogle.pending]: (state) => {
      state.loading = true;
    },
    [loginByGoogle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [loginByGoogle.fulfilled]: (state, action) => {
      state.loading = false;
      state.authenticate = true;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});
export const { isUserLoggedIn } = authSlice.actions;

export default authSlice.reducer;
