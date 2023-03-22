import React from "react";

import { MainHeader, Footer } from "../../components";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
