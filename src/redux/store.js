import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "./slices/destination.slice";
import wishListSlice from "./slices/wish.list.slice";
export default configureStore({
  reducer: {
    destinations: destinationSlice,
    wishList: wishListSlice,
  },
});
