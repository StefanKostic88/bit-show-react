import React from "react";
import { PaginationContainer } from "../../components";

const Footer = () => {
  return (
    <footer
      id="main-footer"
      className="container-fluid p-3 d-flex justify-content-center align-items-center fixed-bottom bg-dark"
    >
      {/* <h5 className="text-light">Copyright @ Stefan Kostic 2023</h5> */}
      <PaginationContainer />
    </footer>
  );
};

export default Footer;
