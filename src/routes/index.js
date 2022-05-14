import HomePage from "../pages/home.page";
import WishlistPage from "../pages/wishlist.page";
import { InWishListButton } from "../styled.components/styled.buttons";

const routes = [
  { pathName: "Destinations Page", component: HomePage, to: "/" },
  {
    pathName: <InWishListButton size="30px" />,
    component: WishlistPage,
    to: "wishlist",
  },
];

export default routes;
