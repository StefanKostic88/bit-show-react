import { useContext } from "react";
import { useLocation, useParams } from "react-router";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { CustomSearchBar, Canvas } from "../../components";
import { generateMovie } from "../../shared/helperFunctions";
import { GlobalDataContext } from "../../store/GlobalContext/global-data-context";

const MainHeader = () => {
  const location = useLocation();
  const { id } = useParams();
  const { getFilteredShows } = useContext(GlobalDataContext);

  const showDetailIsOpened = location.pathname === `/all-shows/${id}`;

  const getSearchMovieListData = async (searchTerm) => {
    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    const data = await res.json();
    return data.map(({ show }) => generateMovie(show));
  };

  const searchHandler = async (e) => {
    const searchFilter = await getSearchMovieListData(e.target.value);
    getFilteredShows(searchFilter);
    // console.log(searchFilter);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Canvas />
        </Nav>
        {!showDetailIsOpened && (
          <CustomSearchBar label="Search Show" onChange={searchHandler} />
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
