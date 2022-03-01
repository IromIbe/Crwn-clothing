import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemsFromCart } from "./cartUtils";
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
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },
    reduceItem: (state, action) => {
      state.cartItems = removeItemsFromCart(state.cartItems, action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { toggle_cart, addItem, clearItemFromCart, reduceItem } =
  cartSlice.actions;
