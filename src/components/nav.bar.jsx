import { NavLink } from "react-router-dom";
import styled from "styled-components";
import paths from "../routes/paths";

const NavContainer = styled.nav`
  background-color: #857ee9;
  height: 3em;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const NavList = styled.ul`
  display: flex;
  gap: 1em;
  margin: 0px 5%;
  list-style: none;
`;
const NavItem = styled(NavLink)`
  text-decoration: none;
`;

const NavBarComponent = () => {
  return (
    <NavContainer>
      <NavList>
        {paths.map((path) => (
          <NavItem key={path.pathName} active-class-name="active" to={path.to}>
            {path.pathName}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default NavBarComponent;