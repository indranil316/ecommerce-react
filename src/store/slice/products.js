import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { queries } from "../../constants";
import commerce from "../../commerceApi";

export const fetchProductsByCategory = createAsyncThunk(queries.fetchProductsByCategory, async (searchedCategorySlug) => {
    const res = await commerce.products.list({
        category_slug:[searchedCategorySlug]
    });
    if(!res.data){
        res.data=[];
    }
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