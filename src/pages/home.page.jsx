import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../store/slices/destination.slice";
import { addwishListItem } from "../store/slices/wish.list.slice";
import { EmptyPage, Toast } from "../styled.components/styled.components";
import { imageList } from "../services/services";
import useToast from "../custom.hooks/toast.hook";
import {
  CardContainer,
  MainContainer,
} from "../styled.components/styled.containers";
import CardComponent from "../components/card.component";

const HomePage = () => {
  const dispatch = useDispatch();
  const [toast, popToast] = useToast();
  const destinationList = useSelector(
    (state) => state.destinations.destinationList
  );
  const wishList = useSelector((state) => state.wishList.wishListItems);

  const handleOnAddToWishList = (item) => {
    if (!item.isOnWishList) {
      dispatch(addDestination(item));
      dispatch(addwishListItem(item));
      popToast({
        description: "added to wish list successfully",
        state: "success",
      });
      return;
    }
    popToast({ description: "you cant add it to wishlist", state: "error" });
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
        popToast({ description: "couldnt get the data", state: "error" });
      }
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);
  return (
    <MainContainer>
      {toast.description.length > 0 && (
        <Toast status={toast.state}>{toast.description}</Toast>
      )}
      {destinationList.length === 0 && <EmptyPage>loading ...</EmptyPage>}
      <CardContainer>
        {destinationList.map((destination) => (
          <CardComponent
            key={destination.id}
            destination={destination}
            handleOnAddToWishList={handleOnAddToWishList}
          />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default HomePage;
