import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Nav, Navbar, Container } from "react-bootstrap";
import { CustomSearchBar, Canvas } from "../../components";

import { GlobalDataContext } from "../../store/GlobalContext/global-data-context";

const MainHeader = () => {
  const location = useLocation();
  const { id } = useParams();

  const [searchTearm, setSearchTearm] = useState("");

  const { getFilteredShows } = useContext(GlobalDataContext);

  const showDetailIsOpened = location.pathname === `/all-shows/${id}`;

  const resetSearch = () => {
    setSearchTearm(() => "");
  };

  useEffect(() => {
    if (location.pathname === `/`) {
      console.log("path name");
      resetSearch();
    }
  }, [location.pathname]);

  const searchHandler = (e) => {
    getFilteredShows(e.target.value);
    setSearchTearm(() => e.target.value);
  };

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
