import "bootstrap/dist/css/bootstrap.min.css";
import { Root, HomePage } from "./pages";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Root />}>
          <Route path={"/"} element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
