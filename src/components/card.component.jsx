import React from "react";
import {
  InWishListButton,
  WishListButton,
} from "../styled.components/styled.buttons";
import { MainFlexContainer } from "../styled.components/styled.containers";
import { Card } from "../styled.components/styled.pages.components";

const CardComponent = ({ destination, handleOnAddToWishList }) => {
  return (
    <Card
      justify="none"
      direction="column"
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
  );
};

export default CardComponent;
