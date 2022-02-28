import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cartUtils";
export const incrementAsync = createAsyncThunk("counter/fetchCount");

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    toggle_cart: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      return state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { toggle_cart, addItem, clearItemFromCart } = cartSlice.actions;
