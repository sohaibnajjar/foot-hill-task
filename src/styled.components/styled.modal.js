import styled from "styled-components";
import { theme } from "./color.theme";
import { MainFlexContainer } from "./styled.containers";

export const Modal = styled.div`
  display: ${(props) => (props.isOpen === true ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #4b4b4b99;
  padding-top: 50px;
  justify-content: center;
`;
export const ModalContainer = styled(MainFlexContainer)`
  background-color: ${theme.lightGray};
  width: 30%;
  height: 25%;
  border-radius: 20px;
  justify-content: space-around;
  @media (max-width: 1000px) {
    width: 70%;
    height: 20%;
  }
`;
