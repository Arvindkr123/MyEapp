import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;
