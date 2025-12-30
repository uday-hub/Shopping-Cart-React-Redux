import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ShopCart/ProductSlice";
import cartReducer from "../features/ShopCart/CartSlice"

export const store = configureStore({
    reducer : {
        products : productReducer,
        cart : cartReducer
    }
})