import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recommendAPI from "../../api/recommendAPI";

export const getRecommendRelateProduct = createAsyncThunk("recom/getrecommendRelateProduct", async(reqBody) => {
    const response = await recommendAPI.recommendRelateItem(reqBody);
    if(response){
        return response; 
    }
});
const initialState = {
    recommendList: [],
    loading: false, 
    error: null,
}
export const recommendSlice = createSlice({
    name: "recommend",
    initialState,
    reducers: {
        resetRecommendSlice: () => initialState,
    },
    extraReducers: {
        [getRecommendRelateProduct.pending] : (state) => {
            state.loading = true;
        },
        [getRecommendRelateProduct.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getRecommendRelateProduct.fulfilled] : (state, action) => {
            state.loading = false;
            state.recommendList = action.payload.products;
        }
    }
})

export const { resetRecommendSlice } = recommendSlice.actions;
export default recommendSlice.reducer;