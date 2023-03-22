import React from "react";

import { useState } from "react";
import { Offcanvas, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { MainNav } from "../../components";

const Canvas = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //

  const linksArr = [
    {
      name: "Most Popular",
      handler: () => {
        navigate("/");
        setShow((prev) => !prev);
      },
    },
    {
      name: "All Shows",
      handler: () => {
        navigate("/all-shows");
        setShow((prev) => !prev);
      },
    },
    {
      name: "Actors",
      handler: () => {
        navigate("/all-shows");
        setShow((prev) => !prev);
      },
    },
  ];

  return (
    <>
      <Navbar.Brand onClick={handleShow}>Bit Show</Navbar.Brand>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bit Show</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MainNav links={linksArr} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Canvas;
