import "bootstrap/dist/css/bootstrap.min.css";
import { Root, HomePage, AllShows } from "./pages";
import { Routes, Route, useLocation } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const path = useLocation();
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    if (path.pathname === "/all-shows") {
      setShowPagination(() => true);
    } else {
      setShowPagination(() => false);
    }
  });

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Root showPagination={showPagination} />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/all-shows"} element={<AllShows />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
