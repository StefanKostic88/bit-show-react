import React from "react";

import { MainHeader, Footer } from "../../components";
import { Outlet } from "react-router";

const Root = ({ showPagination }) => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer showPagination={showPagination} />
    </>
  );
};

export default Root;
