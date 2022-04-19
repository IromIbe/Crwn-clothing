import { createSelector } from "@reduxjs/toolkit";
// import shopDataSlice from "./shopDataSlice";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.data
);

// converting object to behave like an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (data) => Object.keys(data).map((key) => data[key])
);

export const selectShopCollection = (collectionUrlparam) =>
  createSelector([selectCollections], (data) => data[collectionUrlparam]);
