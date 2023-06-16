import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { queries } from "../../constants";
import commerce from "../../commerceApi";

export const fetchProductById = createAsyncThunk(queries.fetchProductById, async (productId)=>{
    const res =  commerce.products.retrieve(productId);
    return res;
})

const pdpProductSlice = createSlice({
    name:"product",
    initialState:{
        isLoading:true,
        data:null,
        error:null
    },
    extraReducers:(builders) => {
        builders.addCase(fetchProductById.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builders.addCase(fetchProductById.pending, (state, action) => {
            state.isLoading=true;
        });
        builders.addCase(fetchProductById.rejected, (state, action)=>{
            state.isLoading=false;
            state.error={
                message:"Could not fetch product",
                err:action.payload
            };
        })
    }
})

export default pdpProductSlice.reducer;