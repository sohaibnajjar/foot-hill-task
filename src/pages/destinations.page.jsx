import styled from "styled-components";
import MyImage from "../asset/image.jpeg";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../redux/slices/destination.slice";
import { addwishListItem } from "../redux/slices/wish.list.slice";

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
const Card = styled.div`
  max-height: 250px;
  background-color: #f3f3f3;
  border: 2px solid #999;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const CardHeader = styled.h1``;
const CardDescription = styled.p`
  max-height: 90px;
  overflow-y: auto;
`;
const CardState = styled.div`
  background-color: ${(props) => (props.isInWishList ? "#abf5a1" : "#ff7676")};
  padding: 10px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
const ErrorToast = styled.div`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ff7676;
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px 20px;
  font-weight: bold;
`;
const DestinationsPage = () => {
  const dispatch = useDispatch();
  const destinationList = useSelector(
    (state) => state.destinations.destinationList
  );
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
  }, [destinationList]);

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
                <CardHeader>{destination.name}</CardHeader>
                <CardDescription>{destination.description}</CardDescription>
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
