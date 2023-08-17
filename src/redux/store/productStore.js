import { configureStore } from "@reduxjs/toolkit";
import { fetchRequest, productReducer } from "../slice/productSlice";

export const store = configureStore({
    reducer: productReducer,
});

store.dispatch(fetchRequest());
