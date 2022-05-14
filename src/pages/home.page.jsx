import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../store/slices/destination.slice";
import { addwishListItem } from "../store/slices/wish.list.slice";
import { EmptyPage, Toast } from "../styled.components/styled.components";
import { imageList } from "../services/services";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useToast from "../custom.hooks/toast.hook";
import { Card } from "../styled.components/styled.pages.components";
import {
  CardContainer,
  ImageContainer,
  MainContainer,
  MainFlexContainer,
} from "../styled.components/styled.containers";
import {
  InWishListButton,
  WishListButton,
} from "../styled.components/styled.buttons";

const HomePage = () => {
  const dispatch = useDispatch();
  const [toast, setToast] = useToast();
  const destinationList = useSelector(
    (state) => state.destinations.destinationList
  );
  const wishList = useSelector((state) => state.wishList.wishListItems);

  const handleOnAddToWishList = (item) => {
    if (!item.isOnWishList) {
      dispatch(addDestination(item));
      dispatch(addwishListItem(item));
      setToast({
        description: "added to wish list successfully",
        state: "success",
      });
      return;
    }
    setToast({ description: "you cant add it to wishlist", state: "error" });
  };

  useEffect(() => {
    localStorage.setItem("destinationList", JSON.stringify(destinationList));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [destinationList, wishList]);

  const fetchInitialData = async () => {
    if (destinationList.length === 0) {
      try {
        await imageList(dispatch);
      } catch (error) {
        setToast({ description: "couldnt get the data", state: "error" });
      }
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);
  console.log(toast);
  return (
    <MainContainer>
      {toast.description.length > 0 && (
        <Toast status={toast.state}>{toast.description}</Toast>
      )}
      {destinationList.length === 0 && <EmptyPage>loading ...</EmptyPage>}
      <CardContainer>
        {destinationList.map((destination) => (
          <Card
            justify="none"
            direction="column"
            key={destination.id}
            onClick={() => handleOnAddToWishList(destination)}
          >
            <img
              loading="lazy"
              src={destination.destinationImage}
              alt="destination"
            />
            <MainFlexContainer justify="space-between" padding="10px ">
              <h3>{destination.name}</h3>
              {destination.isOnWishList ? (
                <sup>
                  In wish list <InWishListButton size="30px" />
                </sup>
              ) : (
                <sup>
                  Add to wish list <WishListButton size="30px" />
                </sup>
              )}
            </MainFlexContainer>
            <p>{destination.description}</p>
          </Card>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default HomePage;
