import React from "react";
import clases from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <div className={`${clases["sk-cube-grid"]}`}>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube1"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube2"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube3"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube4"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube5"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube6"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube7"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube8"]}} bg-primary`}
        ></div>
        <div
          className={`${clases["sk-cube"]} ${clases["sk-cube9"]}} bg-primary`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
