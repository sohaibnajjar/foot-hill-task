export const addDestinationReducer = (state, action) => {
  state.destinationList = state.destinationList.map((destination) =>
    destination.id === action.payload.id
      ? { ...action.payload, isOnWishList: !action.payload.isOnWishList }
      : destination
  );
};

export const removeDetinationFromWishListReducer = (state, action) => {
  state.destinationList = state.destinationList.map((destination) =>
    destination.id === action.payload.id ? action.payload : destination
  );
};
