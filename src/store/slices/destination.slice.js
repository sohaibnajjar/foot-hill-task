import { createSlice } from "@reduxjs/toolkit";
import {
  addDestinationReducer,
  fetchDestinationReducer,
  removeDestinationFromWishListReducer,
} from "../reducers/destination.reducer";

export const destinationSlice = createSlice({
  name: "destinations",
  initialState: {
    destinationList: JSON.parse(localStorage.getItem("destinationList")) ?? [],
  },

  // destination reducers
  reducers: {
    addDestination: addDestinationReducer,
    removeDestinationFromWishList: removeDestinationFromWishListReducer,
    fetchDestinations: fetchDestinationReducer,
  },
});

//Destinations action creaters
export const {
  addDestination,
  removeDestinationFromWishList,
  fetchDestinations,
} = destinationSlice.actions;

// default export to store
export default destinationSlice.reducer;
