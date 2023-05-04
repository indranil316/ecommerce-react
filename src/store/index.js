import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categories';
import ProductReducer from './slice/products';

export const store = configureStore({
  reducer: {
    categories:categoryReducer,
    products:ProductReducer
  },
})