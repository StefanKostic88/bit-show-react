import "bootstrap/dist/css/bootstrap.min.css";
import { Root, HomePage, AllShows, ShowDeatailsPage } from "./pages";
import { Routes, Route, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { GlobalContextWraper } from "./store/GlobalContext/global-data-context";

function App() {
  const path = useLocation();
  const navigate = useNavigate();
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
