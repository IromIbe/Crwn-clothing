import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk("counter/fetchCount");

const initialState = {
  hidden: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    toggle_cart: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export default cartSlice.reducer;
export const { toggle_cart } = cartSlice.actions;
