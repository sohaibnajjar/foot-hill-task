import axios from "axios";
import { fetchDestinations } from "../redux/slices/destination.slice";

export const imageList = async (dispatch) => {
  const res = await axios({
    url: "https://api.unsplash.com/search/photos",
    headers: {
      Authorization: "Client-ID 1k53ErbJANaGA2R-XroyIM52I0GhF7O03Bh2PHpkVak",
    },
    params: { query: "hiking", per_page: 21, orientation: "landscape" },
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
};
