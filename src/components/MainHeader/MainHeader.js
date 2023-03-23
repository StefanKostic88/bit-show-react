import React from "react";

import { Nav, Navbar, Container, Form } from "react-bootstrap";
import Canvas from "../Canvas/Canvas";

const MainHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Canvas />
        </Nav>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control placeholder="search" />
        </Form.Group>
      </Container>
    </Navbar>
  );
};

export default MainHeader;

{
  /* <Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#features">Features</Nav.Link>
<Nav.Link href="#pricing">Pricing</Nav.Link> */
}
