import { useLocation, useParams } from "react-router";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import Canvas from "../Canvas/Canvas";

const MainHeader = () => {
  const location = useLocation();
  const { id } = useParams();
  const showDetailIsOpened = location.pathname === `/all-shows/${id}`;

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Canvas />
        </Nav>
        {!showDetailIsOpened && (
          <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control placeholder="search" />
          </Form.Group>
        )}
      </Container>
    </Navbar>
  );
};

export default MainHeader;
