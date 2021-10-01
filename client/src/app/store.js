import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
