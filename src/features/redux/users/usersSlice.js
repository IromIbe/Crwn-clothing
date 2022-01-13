import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk("counter/fetchCount");

const initialState = {
  currentUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export default usersSlice.reducer;
export const { login, logout } = usersSlice.actions;
