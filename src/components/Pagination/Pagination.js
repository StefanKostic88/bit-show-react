import React from "react";
import { Pagination } from "react-bootstrap";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const PaginationContainer = () => {
  return <Pagination>{items}</Pagination>;
};

export default PaginationContainer;

{
  /* <Pagination size="lg">{items}</Pagination>
<br />

<Pagination size="sm">{items}</Pagination> */
}
