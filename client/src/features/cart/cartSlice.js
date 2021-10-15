import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartAPI from "../../api/cartAPI";

export const addToCart = createAsyncThunk(
  "/cart/addToCart",
  async (cartItems) => {
    const response = await cartAPI.addToCart(cartItems);
    return response;
  }
);
export const getCartItems = createAsyncThunk("/cart/getCartItems", async () => {
  const response = await cartAPI.getCartItems();
  console.log(response);
  return response;
});

//tạo 1 initialState Cart
const initialState = {
  cartItems: [],
  loading: false,
  error: null,
  message: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [addToCart.pending]: (state) => {
      state.loading = true;
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload.data.message;
      // getCartItems();
    },
    [getCartItems.pending]: (state) => {
      state.loading = true;
    },
    [getCartItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.data.cartItems;
      console.log(state.cartItems);
    },
  },
});

export default cartSlice.reducer;
