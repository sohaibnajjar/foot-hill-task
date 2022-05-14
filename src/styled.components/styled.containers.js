import styled from "styled-components";
import { theme } from "./color.theme";

export const MainContainer = styled.div`
  max-width: 1440px;
  width: 100%;
`;

export const MainFlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "1440px")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: 100%;
  padding: ${(props) => (props.padding ? props.padding : "none")}; ;
`;

export const TableContainert = styled.div`
  width: 90%;
  display: block;
  overflow-x: auto;
`;

export const CardContainer = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(
    ${(props) =>
      props.gridColumns ? props.gridColumns : "4, minmax(300px, 1fr)"}
  );
  grid-auto-rows: 1fr;
  justify-items: stretch;
  justify-content: center;
  gap: 30px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  }
`;

export const NavContainer = styled(MainFlexContainer)`
  background-color: #333;
  height: 3em;
`;
