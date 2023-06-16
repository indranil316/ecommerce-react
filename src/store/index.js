import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categories';
import ProductsReducer from './slice/products';
import ProductReducer from './slice/product';

export const store = configureStore({
  reducer: {
    categories:categoryReducer,
    products:ProductsReducer,
    product:ProductReducer
  },
})