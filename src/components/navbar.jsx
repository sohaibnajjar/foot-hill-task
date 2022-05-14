import routes from "../routes";
import { NavContainer } from "../styled.components/styled.containers";
import { NavItem, NavList } from "../styled.components/styled.navbar";

const NavBarComponent = () => {
  return (
    <NavContainer maxWidth="none">
      <NavList justify="space-between" padding="0px 30px" as="ul" gap="20px">
        <div></div>
        {routes.map((route) => (
          <NavItem key={route.to} active-class-name="active" to={route.to}>
            {route.pathName}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default NavBarComponent;
