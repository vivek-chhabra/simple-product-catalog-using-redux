import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
    isPending: false,
    error: null,
    products: [],
    cartItems: [],
};

// createAsyncThunk
export const fetchRequest = createAsyncThunk("products/fetchProducts", async () => {
    const res = await axios("https://fakestoreapi.com/products");
    return res.data;
});

// createSlice
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getCartItems: (state, action) => {
            if (state.cartItems.every((item) => item.id !== action.payload.id)) {
                state.cartItems.push(action.payload);
            }
        },
        removeCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRequest.pending, (state) => {
            state.isPending = true;
            state.error = null;
        });
        builder.addCase(fetchRequest.fulfilled, (state, action) => {
            state.isPending = false;
            state.products = action.payload;
        });
        builder.addCase(fetchRequest.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.error.message;
            state.products = [];
        });
    },
});

// action
export const { getCartItems, removeCartItem } = productSlice.actions;

// reducer
export const productReducer = productSlice.reducer;
