import React from "react";

import { useState } from "react";
import { Offcanvas, Navbar, Nav } from "react-bootstrap";

const Canvas = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  return (
    <>
      <Navbar.Brand onClick={handleShow}>Bit Show</Navbar.Brand>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link href="#home">Most Popular</Nav.Link>
            <Nav.Link href="#features">All Shows</Nav.Link>
            <Nav.Link href="#pricing">Actors</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Canvas;
