import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  name: string;
}

const initialState: Product = { name: "" };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    initializeProduct: (state, action: PayloadAction<Product>) => {
      state.name = action.payload.name;
    },
    setProductName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { initializeProduct, setProductName } = productSlice.actions;
export default productSlice.reducer;
