import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../CommonUtils/apiUrl";
import { STATUS } from "../CommonUtils/status";

const initialState = {
  products: [],
  productsStatus: "",
  productSingle: [],
  productSingleStatus: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state, action) => {
        state.productSingleStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.productSingle = action.payload;
        state.productSingleStatus = STATUS.SUCCEDED;
      })
      .addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.productSingleStatus = STATUS.FAILED;
      })

      // Now for the Signle product

      .addCase(fetchAsyncSingleProducts.pending, (state, action) => {
        state.productSingleStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncSingleProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productSingleStatus = STATUS.SUCCEDED;
      })
      .addCase(fetchAsyncSingleProducts.rejected, (state, action) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  },
});

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetch",
  async (limit) => {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    const data = await response.json();
    return data.products;
  }
);

export const fetchAsyncSingleProducts = createAsyncThunk(
  "products-single/fetch",
  async (id) => {
    const response = await fetch(`${BASE_URL}/product/${id}`);
    const data = await response.json();
    return data;
  }
);

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;

export const getProductSingle = (state) => state.product.productSingle;
export const getProductSigleStatus = (state) =>
  state.product.productSingleStatus;

export default productSlice.reducer;
