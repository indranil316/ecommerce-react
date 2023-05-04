import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { queries } from "../../constants";
import { Categories } from '../../dummyApi';

export const fetchProductsByCategory = createAsyncThunk(queries.fetchProductsByCategory, async (searchedCategoryId) => {
    const res = await Categories.getProductsByCategory(searchedCategoryId);
    return res;
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        isLoading:true,
        data:null,
        error:null
    },
    extraReducers:(builders) => {
        builders.addCase(fetchProductsByCategory.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builders.addCase(fetchProductsByCategory.pending, (state, action) => {
            state.isLoading=true;
        });
        builders.addCase(fetchProductsByCategory.rejected, (state, action)=>{
            state.isLoading=false;
            state.error={
                message:"Could not fetch products",
                err:action.payload
            };
        })
    }
})

export default productSlice.reducer;