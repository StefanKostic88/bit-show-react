import React from "react";
import { ListGroup, Image } from "react-bootstrap";

const CastListGrid = ({ showInfo: { castList } }) => {
  console.log(castList);
  return (
    <ListGroup className="w-75">
      {castList.map(({ name, image }, index) => (
        <ListGroup.Item
          key={index}
          variant="light"
          className="d-flex gap-3 align-items-center"
        >
          <Image
            src={image}
            roundedCircle
            thumbnail
            style={{ width: "60px", height: "60px" }}
          />
          <h5>{name}</h5>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CastListGrid;

// name, image

{
  /* <ListGroup.Item
        variant="light"
        className="d-flex gap-3 align-items-center"
      >
        <Image
          src="https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
          roundedCircle
          thumbnail
          style={{ width: "40px", height: "40px" }}
        />
        <h4>Cao</h4>
      </ListGroup.Item> */
}
{
  /* <ListGroup.Item variant="light">Cao</ListGroup.Item>
      <ListGroup.Item variant="light">Cao</ListGroup.Item> */
}
