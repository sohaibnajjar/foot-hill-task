import styled from "styled-components";

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
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  justify-items: stretch;
  gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
const Card = styled(FlexSpaceBetween)`
  flex-direction: column;
  background-color: ${Colors.cardBackGround};
  border: 2px solid ${Colors.borderColor};
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const CardInformation = styled.div`
  flex-direction: column;
  text-align: left;
  width: 100%;
  p {
    max-height: 90px;
    width: 100%;
    overflow-y: auto;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  img {
    border-radius: 10px;
    height: 180px;
    width: 100%;
  }
`;
const CardState = styled.div`
  background-color: ${(props) =>
    props.isInWishList ? Colors.successColor : Colors.dangerColor};
  padding: 10px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
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
            <div>
              <ImageContainer>
                <img src={destination.destinationImage} alt="destination" />
              </ImageContainer>
              <CardInformation>
                <h1>{destination.name}</h1>
                <p>{destination.description}</p>
              </CardInformation>
            </div>
            <CardState isInWishList={destination.isOnWishList}>
              {destination.isOnWishList
                ? "this item is in wishlist"
                : "this item is not in wishlist "}
            </CardState>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default DestinationsPage;
