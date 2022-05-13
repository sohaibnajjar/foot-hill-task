import { NavLink } from "react-router-dom";
import styled from "styled-components";
import paths from "../routes/paths";
import { Colors } from "../styled.components/colors";
const NavContainer = styled.nav`
  background-color: ${Colors.navBarColor};
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
  transition: 0.5s;
  padding: 5px;
  color: ${Colors.whiteColor};
  :hover {
    background-color: ${Colors.secondaryColor};
  }
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
