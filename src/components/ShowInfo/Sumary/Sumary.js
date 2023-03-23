import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

const Sumary = ({ showInfo: { name, image, genreTags, summary, rating } }) => {
  return (
    <div className="row m-0 p-0 container-xl d-flex justify-content-center">
      <img
        className="img-fluid col-11 col-sm-9 col-md-5 col-lg-4 p-0 h-50"
        src={image}
        alt="https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
      />
      <div className="col-11 col-sm-10 col-md-6 col-lg-5 d-flex flex-column mt-3 mt-md-0 ms-md-4 me-md-4 ms-lg-5 me-lg-5">
        <h1 className="text-center mt-3 mb-4  "> {name}</h1>

        <ListGroup className="d-flex flex-row gap-1 gap-lg-2 flex-wrap  justify-content-center justify-content-md-start align-items-center mb-4">
          {genreTags.map((genre) => (
            <Badge key={genre} bg="light text-dark" pill as={ListGroup.Item}>
              {genre}
            </Badge>
          ))}
        </ListGroup>
        <h2 className="text-center mb-4 ">Summary</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Sumary;
