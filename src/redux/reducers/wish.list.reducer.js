export const addwishListItemReducer = (state, action) => {
  state.wishListItems.push({ ...action.payload, isComplete: false });
};

export const deleteWishListItemReducer = (state, action) => {
  state.wishListItems = state.wishListItems.filter(
    (item) => item.id !== action.payload
  );
};

export const WishListItemIsCompleteReducer = (state, action) => {
  state.wishListItems = state.wishListItems.map((item) =>
    item.id === action.payload
      ? { ...item, isComplete: !item.isComplete }
      : item
  );
};
