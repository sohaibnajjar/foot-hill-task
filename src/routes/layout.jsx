import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/nav.bar";

const Layout = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
    </>
  );
};

export default Layout;
