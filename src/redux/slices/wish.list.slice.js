import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishListItems: [],
  },
  reducers: {
    // reducers
    addwishListItem: (state, action) => {
      state.wishListItems.push({ ...action.payload, isComplete: false });
    },
    deleteWishListItem: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
    },
    WishListItemIsComplete: (state, action) => {
      state.wishListItems = state.wishListItems.map((item) =>
        item.id === action.payload
          ? { ...item, isComplete: !item.isComplete }
          : item
      );
    },
  },
});

export const { addwishListItem, deleteWishListItem, WishListItemIsComplete } =
  wishListSlice.actions;

export default wishListSlice.reducer;
