import styled from "styled-components";
import { theme } from "./color.theme";
import { MainFlexContainer } from "./styled.containers";

export const EmptyPage = styled(MainFlexContainer)`
  height: 30vh;
  text-transform: capitalize;
`;

export const Toast = styled.div`
  position: fixed;
  top: 5px;
  left: 10%;
  background-color: ${(props) =>
    props.status === "success" ? theme.successColor : theme.dangerColor};
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px 20px;
  font-weight: bold;
  @media (max-width: 1000px) {
    top: 50px;
    left: 10px;
  }
`;
