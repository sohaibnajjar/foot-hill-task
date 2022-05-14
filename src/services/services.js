import axios from "axios";
import { fetchDestinations } from "../store/slices/destination.slice";

export const imageList = async (dispatch) => {
  try {
    const res = await axios({
      url: "https://api.unsplash.com/search/photos",
      headers: {
        Authorization: `Client-ID 1k53ErbJANaGA2R-XroyIM52I0GhF7O03Bh2PHpkVak`,
      },
      params: {
        query: "destinations",
        per_page: 20,
        orientation: "landscape",
      },
    });

    const apiState = res.data.results.map((item) => ({
      id: item.id,
      name: item.user.name,
      description: item.alt_description,
      destinationImage: item.urls.regular,
      isOnWishList: false,
      isComplete: false,
    }));
    dispatch(fetchDestinations(apiState));
  } catch (error) {
    throw error;
  }
};