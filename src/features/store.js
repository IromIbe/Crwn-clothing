import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "./redux/cart/cartSlice";
import usersReducer from "./redux/users/usersSlice";
import directoryReducer from "./redux/directory/DirectoryDataSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./redux/shop/shopDataSlice";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};
//  optimizing production build
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const reducers = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore(
  {
    reducer: persistedReducer,
  },
  applyMiddleware(...middlewares)
);

export default store;
