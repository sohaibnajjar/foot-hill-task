import { createSlice } from "@reduxjs/toolkit";
import {
  addDestinationReducer,
  removeDestinationFromWishListReducer,
} from "../reducers/destination.reducer";
import MyImage from "../../asset/image.png";
export const destinationSlice = createSlice({
  name: "destinations",
  initialState: {
    destinationList: JSON.parse(localStorage.getItem("destinationList")) ?? [
      {
        id: 1,
        name: "hawai",
        description: "im in hawai",
        destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 2,
        name: "maldiv",
        description:
          "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandaeautem quod accusantium totam minus dolor nostrum obcaecati hic,alias ab? Reiciendis deserunt itaque debitis corporis ratione velitpariatur sint modi.",
        destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 3,
        name: "hebron",
        description: "im in hebron",
        destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 4,
        name: "dubi",
        description: "im in dubi",
        destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 5,
        name: "torky",
        description: "im in torky",
        destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
    ],
  },

  // destination reducers
  reducers: {
    addDestination: addDestinationReducer,
    removeDestinationFromWishList: removeDestinationFromWishListReducer,
  },
});

//Destinations action creaters
export const { addDestination, removeDestinationFromWishList } =
  destinationSlice.actions;

// default export to store
export default destinationSlice.reducer;
