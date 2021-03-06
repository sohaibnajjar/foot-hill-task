export const addDestinationReducer = (state, action) => {
  state.destinationList = state.destinationList.map((destination) =>
    destination.id === action.payload.id
      ? { ...action.payload, isOnWishList: !action.payload.isOnWishList }
      : destination
  );
};

export const removeDestinationFromWishListReducer = (state, action) => {
  state.destinationList = state.destinationList.map((destination) =>
    destination.id === action.payload.id
      ? { ...action.payload, isOnWishList: false }
      : destination
  );
};

export const fetchDestinationReducer = (state, action) => {
  state.destinationList = action.payload;
};
