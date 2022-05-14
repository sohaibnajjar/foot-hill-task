import styled from "styled-components";
import { theme } from "./color.theme";
import { MainFlexContainer } from "./styled.containers";

export const Card = styled(MainFlexContainer)`
  border-radius: 10px;
  img {
    border-radius: 10px;
    height: 180px;
    width: 100%;
  }
  p {
    max-height: 90px;
    width: 100%;
    overflow-y: auto;
  }
`;

export const Table = styled.table`
  min-width: ${(props) => (props.minWidth ? props.minWidth : "600px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  tr:nth-child(even) {
    background-color: ${theme.lightGray};
  }
  td,
  th {
    text-align: left;
    height: 50px;
    border-bottom: 2px solid ${theme.borderColor};
    max-width: 300px;
    padding-left: 20px;
  }
`;
export const InputTd = styled.td`
  text-align: center !important;
`;
