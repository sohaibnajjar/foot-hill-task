import styled from "styled-components";
import MyImage from "../asset/image.jpeg";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../redux/slices/destination.slice";
import { addwishListItem } from "../redux/slices/wish.list.slice";
import {
  ErrorToast,
  FlexSpaceBetween,
} from "../styled.components/styled.components";
import { Colors } from "../styled.components/colors";

const CardContainer = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  justify-items: stretch;
  gap: 20px;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
const Card = styled(FlexSpaceBetween)`
  max-height: 250px;
  background-color: ${Colors.cardBackGround};
  border: 2px solid ${Colors.borderColor};
  border-radius: 10px;
  padding: 10px;
`;
const CardInformation = styled(FlexSpaceBetween)`
  flex-direction: column;
  width: 100%;
  p {
    max-height: 90px;
    overflow-y: auto;
  }
`;

const CardState = styled.div`
  background-color: ${(props) =>
    props.isInWishList ? Colors.successColor : Colors.dangerColor};
  padding: 10px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const DestinationsPage = () => {
  const dispatch = useDispatch();
  const destinationList = useSelector(
    (state) => state.destinations.destinationList
  );
  const wishList = useSelector((state) => state.wishList.wishListItems);

  const [toast, setToast] = useState("");

  const handleOnAddToWishList = (item) => {
    if (!item.isOnWishList) {
      dispatch(addDestination(item));
      dispatch(addwishListItem(item));
      return;
    }
    setToast("you cant add it to wishlist");
    setTimeout(() => {
      setToast("");
    }, 4000);
  };

  useEffect(() => {
    localStorage.setItem("destinationList", JSON.stringify(destinationList));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [destinationList, wishList]);

  return (
    <>
      {toast.length > 0 && <ErrorToast>{toast}</ErrorToast>}
      <CardContainer>
        {destinationList.map((destination) => (
          <Card
            key={destination.id}
            onClick={() => handleOnAddToWishList(destination)}
          >
            <CardInformation>
              <div>
                <h1>{destination.name}</h1>
                <p>{destination.description}</p>
              </div>
              <CardState isInWishList={destination.isOnWishList}>
                {destination.isOnWishList
                  ? "this item is in wishlist"
                  : "this item is not in wishlist "}
              </CardState>
            </CardInformation>
            <div>
              <img src={MyImage} alt="destination" width="100" height="100" />
            </div>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default DestinationsPage;
