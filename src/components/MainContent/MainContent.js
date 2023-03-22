import React from "react";

const MainContent = ({ children }) => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center ps-0 pe-0 "
      style={{ minHeight: "70vh" }}
    >
      {children}
    </div>
  );
};

export default MainContent;
