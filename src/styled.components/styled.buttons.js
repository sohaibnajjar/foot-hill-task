import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#333")};
  height: ${(props) => (props.height ? props.height : "30px")};
  width: ${(props) => (props.width ? props.width : "30px")};
  padding: 5px;
  text-align: center;
`;
export const WishListButton = styled(FaRegHeart)`
  transition: 0.5s;
  :hover {
    color: red;
  }
`;
export const InWishListButton = styled(FaHeart)`
  color: red;
  transition: 0.5s;
  :hover {
    color: #b21919;
  }
`;
