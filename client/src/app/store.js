import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
import categoryReducer from "../features/category/categorySlice";
import brandReducer from "../features/brand/brandSlice";
import productReducer from "../features/product/productSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    brand: brandReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
