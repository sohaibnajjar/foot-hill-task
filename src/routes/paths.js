import DestinationsPage from "../pages/destinations.page";
import WishlistPage from "../pages/wishlist.page";
import HomePage from "../pages/home.page";

const paths = [
  { pathName: "Home Page", page: HomePage, to: "/" },
  { pathName: "Wish List Page", page: WishlistPage, to: "wishlist" },
  { pathName: "Destinations Page", page: DestinationsPage, to: "destinations" },
];

export default paths;
