import { createSlice } from "@reduxjs/toolkit";

export const destinationSlice = createSlice({
  name: "destinations",
  initialState: {
    destinationList: [
      {
        id: 1,
        name: "hawai",
        description: "im in hawai",
        // destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 2,
        name: "maldiv",
        description:
          "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandaeautem quod accusantium totam minus dolor nostrum obcaecati hic,alias ab? Reiciendis deserunt itaque debitis corporis ratione velitpariatur sint modi.",
        // destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 3,
        name: "hebron",
        description: "im in hebron",
        // destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 4,
        name: "dubi",
        description: "im in dubi",
        // destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
      {
        id: 5,
        name: "torky",
        description: "im in torky",
        // destinationImage: MyImage,
        isOnWishList: false,
        isComplete: false,
      },
    ],
  },
  reducers: {
    // reducers
    addDestination: (state, action) => {
      state.destinationList = state.destinationList.map((destination) =>
        destination.id === action.payload.id
          ? { ...action.payload, isOnWishList: !action.payload.isOnWishList }
          : destination
      );
    },
    removeDetinationFromWishList: (state, action) => {
      state.destinationList = state.destinationList.map((destination) =>
        destination.id === action.payload.id ? action.payload : destination
      );
    },
  },
});

export const { addDestination, removeDetinationFromWishList } =
  destinationSlice.actions;

export default destinationSlice.reducer;
