import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const allProduct = createAsyncThunk(
  "allProducts/allProduct",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    //console.log(response.data);
    //slice(-20,-16)
    return response.data;
  }
);
export const electronicsCategory = createAsyncThunk(
  "allProducts/allProduct",
  async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/electronics`
    );
    return response.data;
  }
);
export const jeweleryCategory = createAsyncThunk(
  "allProducts/allProduct",
  async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/jewelery`
    );
    return response.data;
  }
);
export const menCategory = createAsyncThunk(
  "allProducts/allProduct",
  async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/men's clothing`
    );
    return response.data;
  }
);
export const womenCategory = createAsyncThunk(
  "allProducts/allProduct",
  async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`);
    return response.data;
  }
);
const allProducts = createSlice({
  name: "allProducts",
  initialState: [],
  extraReducers: {
    [allProduct.fulfilled]: (state, action) => {
      return action.payload;
    },
    [electronicsCategory.fulfilled]: (state, action) => {
      return action.payload;
    },
    [menCategory.fulfilled]: (state, action) => {
      return action.payload;
    },
    [jeweleryCategory.fulfilled]: (state, action) => {
      return action.payload;
    },
    [womenCategory.fulfilled]: (state, action) => {
        return action.payload;
      },
  },
});
export default allProducts.reducer;
