import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {queries} from '../../constants';
import {Categories} from '../../dummyApi'


export const fetchCategories = createAsyncThunk(queries.fetchCategories, async ()=>{
    const res = await Categories.getCategories();
    return res;
})

const categories = createSlice({
    name:"categories",
    initialState:{
        isLoading:true,
        error:null,
        data:null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action)=> {
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchCategories.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchCategories.rejected, (state,action)=>{
            state.isLoading=false;
            state.error = action.payload;
        })
    }
})

export default categories.reducer;