import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./color.theme";
import { MainFlexContainer } from "./styled.containers";

export const NavList = styled(MainFlexContainer)`
  list-style: none;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  transition: 0.5s;
  padding: 5px;
  color: ${theme.whiteColor};

  :hover {
    background-color: ${theme.secondaryColor};
  }
`;
