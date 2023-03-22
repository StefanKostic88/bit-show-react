import React from "react";

const ErrorWindow = ({ errMsg }) => {
  return (
    <div className="pt-4 ">
      <div>Icon Placeholder</div>
      <div>{errMsg}</div>
      Error
    </div>
  );
};

export default ErrorWindow;
