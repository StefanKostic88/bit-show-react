import "bootstrap/dist/css/bootstrap.min.css";
import { Root, HomePage, AllShows, ShowDeatailsPage } from "./pages";
import { Routes, Route, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { GlobalContextWraper } from "./store/GlobalContext/global-data-context";
import { generateMovie } from "./shared/helperFunctions";

const getSearchMovieListData = async (searchTerm) => {
  const res = await fetch(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  const data = await res.json();
  return data.map(({ show }) => generateMovie(show));
};

// getSearchMovieListData
function App() {
  const path = useLocation();
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState(null);
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    if (path.pathname === "/all-shows") {
      setShowPagination(() => true);
    } else {
      setShowPagination(() => false);
    }
  });
  return (
    <GlobalContextWraper
      contextValue={{
        oppenShowDetails: (showId) => {
          navigate(`/all-shows/${showId}`);
        },
        getFilteredShows: async (searchInput, isTyped) => {
          // if (!searchInput) return;
          const filteredArr = await getSearchMovieListData(searchInput);
          setSearchFilter(() => ({
            filteredMovies: [...filteredArr],
            searchInput,
          }));

          // if (arr.length === 0) {
          //   setSearchFilter(() => null);
          //   return;
          // }
          // setSearchFilter(() => [...arr]);
        },
        resetFilteredState: () => {
          setSearchFilter(null);
        },
        searchedMovies: searchFilter,
      }}
    >
      <Routes>
        <Route path={"/"} element={<Root showPagination={showPagination} />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/all-shows"} element={<AllShows />} />
          <Route path={"/all-shows/:id"} element={<ShowDeatailsPage />} />
        </Route>
      </Routes>
    </GlobalContextWraper>
  );
}

export default App;
