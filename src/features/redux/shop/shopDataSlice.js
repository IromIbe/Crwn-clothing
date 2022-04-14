import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "./shopData";

export const incrementAsync = createAsyncThunk("counter/fetchCount");

const initialState = {
  data: SHOP_DATA,
};

const shopDataSlice = createSlice({
  name: "shop",
  initialState,

  reducers: {
    shopReducer: (state) => {
      return state;
    },
  },
});

export default shopDataSlice.reducer;

export const { shopReducer } = shopDataSlice.actions;
