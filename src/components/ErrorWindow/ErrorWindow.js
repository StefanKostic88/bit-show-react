import React from "react";
import { HiOutlineFaceFrown } from "react-icons/hi2";

const ErrorWindow = ({ errMsg }) => {
  return (
    <div className="pt-4 ">
      <div className="container-sm d-flex justify-content-center align-items-center mb-4">
        <HiOutlineFaceFrown style={{ width: "65px", height: "65px" }} />
      </div>
      <div className="container-sm d-flex justify-content-center align-items-center ">
        <h2 className="text-center w-50">{errMsg}</h2>
      </div>
    </div>
  );
};

export default ErrorWindow;
