import { createSlice } from "@reduxjs/toolkit";
import {
  addwishListItemReducer,
  deleteWishListItemReducer,
  WishListItemIsCompleteReducer,
} from "../reducers/wish.list.reducer";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishListItems: JSON.parse(localStorage.getItem("wishList")) ?? [],
  },

  // WishList reducers
  reducers: {
    addwishListItem: addwishListItemReducer,
    deleteWishListItem: deleteWishListItemReducer,
    WishListItemIsComplete: WishListItemIsCompleteReducer,
  },
});

//WishList action creators
export const { addwishListItem, deleteWishListItem, WishListItemIsComplete } =
  wishListSlice.actions;

// default export to store
export default wishListSlice.reducer;
