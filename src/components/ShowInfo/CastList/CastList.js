import React from "react";

const ImageArr = [];

for (let i = 0; i < 20; i++) {
  ImageArr.push();
}

const CastList = ({ showInfo: { castList } }) => {
  // console.log(showInfo);
  return (
    <>
      <div className="row container-xl d-flex justify-content-center ms-sm-4 me-sm-4  ps-sm-4 pe-sm-4 gap-2 gap-md-3">
        {castList.map(({ name, image }, index) => (
          <div
            key={`${name}-${index}`}
            className="col-5 col-sm-3  col-lg-2  p-2 position-relative bg-dark"
          >
            <img className="img-fluid " src={image} alt={image} />
            <h5
              className="text-light position-absolute ps-3 pt-2 pb-2 ps-sm-2 mb-sm-1 bg-dark w-100"
              style={{ bottom: 0, left: 0 }}
            >
              {name.split(" ")[0]}
              <br />
              {name.split(" ")[1]}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default CastList;
