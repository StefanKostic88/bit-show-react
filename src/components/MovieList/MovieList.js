import React from "react";
import MovieListCard from "./MovieListCard/MovieListCard";
import { useContext } from "react";
// import { ErrorWindow } from "../../components";

import { fetchMoviesList } from "../../services/services";

import { GlobalDataContext } from "../../store/GlobalContext/global-data-context";

/// ovde saljes handler za otvaranje posebne kartice
//filter po rejtinug down
//filter po rejtinug up

const MovieList = ({ movieList }) => {
  const ctx = useContext(GlobalDataContext);
  const getShowData = (id) => {
    ctx.oppenShowDetails(id);
  };

  return (
    <div className="pt-4">
      <h2 className="text-center">Popular Shows</h2>
      <div className="row container-xl d-flex justify-content-center align-items-center pt-4 pt-md-2 pb-5 mt-5 mb-5 ps-0 pe-0">
        {movieList.map((movie) => (
          <MovieListCard
            key={movie.id}
            {...movie}
            onGetShowData={getShowData}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

{
  /* <ErrorWindow
errMsg={"We couldnt find any movie that matches your search"}
/> */
}

// FEF4A2
