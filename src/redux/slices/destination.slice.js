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
        destinationImage:
          "https://images.unsplash.com/photo-1582790606212-791416742d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
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
