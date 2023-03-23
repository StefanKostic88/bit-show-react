import React from "react";

import { Nav } from "react-bootstrap";

const MainNav = ({ links }) => {
  return (
    <Nav>
      {links.map(({ name, handler }, index) => (
        <Nav.Link key={index} onClick={handler}>
          {name}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default MainNav;
