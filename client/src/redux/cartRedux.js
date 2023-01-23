import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.quantity -= action.payload.quantity;
        state.total -= state.products[productIndex].price * action.payload.quantity;
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
