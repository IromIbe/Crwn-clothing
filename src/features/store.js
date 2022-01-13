import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cart/cartSlice";
import usersReducer from "./redux/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    cart: cartReducer,
  },
});
