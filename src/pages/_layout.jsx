import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/navbar";
import { MainFlexContainer } from "../styled.components/styled.containers";

const Layout = () => {
  return (
    <>
      <NavBarComponent />
      <MainFlexContainer maxWidth="none" direction="column">
        <Outlet />
      </MainFlexContainer>
    </>
  );
};

export default Layout;
