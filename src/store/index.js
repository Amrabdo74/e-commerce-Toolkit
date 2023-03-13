import { configureStore } from "@reduxjs/toolkit";
import product from "./productSlice";
import cart from "./cartSlice";
export const store = configureStore({
  reducer: {
    product,cart
  }
});
