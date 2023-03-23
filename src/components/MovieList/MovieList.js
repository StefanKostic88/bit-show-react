import React from "react";
import MovieListCard from "./MovieListCard/MovieListCard";
// import { ErrorWindow } from "../../components";

import { fetchMoviesList } from "../../services/services";

const MovieList = ({ movieList }) => {
  console.log(movieList);
  return (
    <div className="pt-4">
      <h2 className="text-center">Popular Shows</h2>
      <div className="row container-xl d-flex justify-content-center align-items-center pt-4 pt-md-2 pb-5 mt-5 mb-5 ps-0 pe-0">
        {movieList.map((movie) => (
          <MovieListCard key={movie.id} {...movie} />
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
