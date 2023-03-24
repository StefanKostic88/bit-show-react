import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { CustomSearchBar, Canvas } from "../../components";

import { GlobalDataContext } from "../../store/GlobalContext/global-data-context";

const MainHeader = () => {
  const location = useLocation();
  const { id } = useParams();

  const [searchTearm, setSearchTearm] = useState("");

  const { getFilteredShows } = useContext(GlobalDataContext);

  const showDetailIsOpened = location.pathname === `/all-shows/${id}`;
  console.log();

  const searchHandler = (e) => {
    const startedTyping = true;
    getFilteredShows(e.target.value, startedTyping);
    setSearchTearm(() => e.target.value);
  };

  // useEffect(() => {
  //   if (location.pathname === `/`) {
  //     setSearchTearm(() => "");
  //   }
  // }, [location.pathname]);
  // console.log(searchTearm);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Canvas />
        </Nav>
        {!showDetailIsOpened && (
          <CustomSearchBar
            label="Search Show"
            onChange={searchHandler}
            value={searchTearm}
          />
        )}
      </Container>
    </Navbar>
  );
};

export default MainHeader;

{
  /* <Form.Group>
<Form.Label>Search</Form.Label>
<Form.Control placeholder="search" />
</Form.Group> */
}
