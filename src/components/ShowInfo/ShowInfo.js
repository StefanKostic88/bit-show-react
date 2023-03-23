import { useEffect, useState } from "react";
import { MdViewModule, MdViewList, MdRefresh } from "react-icons/md";

import CastList from "./CastList/CastList";
import Sumary from "./Sumary/Sumary";
import CastListGrid from "./CastListGrid/CastListGrid";

import { getCurrentGridView } from "../../shared/helperFunctions";

const ShowInfo = ({ showInfo }) => {
  const [gridIsVisible, setGridIsVisible] = useState(null);

  const onClickHandler = () => {
    setGridIsVisible((prev) => {
      localStorage.setItem("gridView", JSON.stringify(!prev));
      return !prev;
    });
  };

  useEffect(() => {
    const data = getCurrentGridView();
    setGridIsVisible(() => data);
  });

  return (
    <div className="row container-xl d-flex justify-content-center align-items-center pt-4 pt-md-2 pb-5 mt-5 mb-5 ps-0 pe-0">
      <Sumary showInfo={showInfo} />
      <div className="row container-xl d-flex justify-content-center  align-items-start ms-sm-2 me-sm-2  ps-sm-4 pe-sm-4 ps-lg-0  ms-lg-0 me-lg-0 pe-lg-0 mb-3 mt-4">
        <h2 className="col-6 col-sm-5 col-md-6 col-lg-5 d-flex justify-content-start">
          Cast
        </h2>
        <div className="col-6 col-sm-6 col-md-6 col-lg-5 d-flex justify-content-end align-items-center">
          {gridIsVisible ? (
            <MdViewList
              onClick={onClickHandler}
              style={{
                width: "50px",
                height: "50px",
                fill: "#1B9CE2",
                cursor: "pointer",
              }}
            />
          ) : (
            <MdViewModule
              onClick={onClickHandler}
              style={{
                width: "50px",
                height: "50px",
                fill: "#1B9CE2",
                cursor: "pointer",
              }}
            />
          )}
        </div>
      </div>
      {gridIsVisible ? (
        <CastList showInfo={showInfo} />
      ) : (
        <CastListGrid showInfo={showInfo} />
      )}
    </div>
  );
};

export default ShowInfo;
