import React from "react";

const MovieListCard = ({ rating, img, name, id, onGetShowData }) => {
  // console.log(rating, img, name, id, onGetShowData);
  return (
    <div
      className="card m-xl-4 m-3"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => {
        onGetShowData(id);
      }}
    >
      <img
        src={img}
        className="card-img-top position-relative"
        alt={`${name}-${id}`}
      />
      <h6
        className="position-absolute bg-primary rounded-circle d-flex justify-content-center align-items-center text-light"
        style={{ width: "45px", height: "45px", bottom: "9%", right: "3%" }}
      >
        {rating}
      </h6>
      <div className={`card-body ${rating > 8.5 ? " bg-warning" : ""}`}>
        <h5 className="card-title text-center  fw-bolder">{name}</h5>
      </div>
    </div>
  );
};

export default MovieListCard;
