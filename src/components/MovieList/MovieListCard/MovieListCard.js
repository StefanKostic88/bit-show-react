import React from "react";

const MovieListCard = () => {
  return (
    <div className="card m-xl-4 m-3" style={{ width: "18rem" }} id="500">
      <img
        src="https://images.pexels.com/photos/4234529/pexels-photo-4234529.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        className="card-img-top"
        alt="asdasd"
      />
      <div className="card-body">
        <h5 className="card-title text-center  fw-bolder">Title</h5>
      </div>
    </div>
  );
};

export default MovieListCard;
