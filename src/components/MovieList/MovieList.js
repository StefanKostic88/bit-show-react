import React from "react";
import MovieListCard from "./MovieListCard/MovieListCard";
import { ErrorWindow } from "../../components";

const MovieList = () => {
  return (
    // <div className="pt-4">
    //   <h2 class="text-center">Popular Shows</h2>
    //   <div className="row container-xl d-flex justify-content-center align-items-center pt-4 pt-md-2 pb-5 mt-5 mb-5 ps-0 pe-0">
    //     <MovieListCard />
    //     <MovieListCard />
    //     <MovieListCard />
    //     <MovieListCard />
    //     <MovieListCard />
    //     <MovieListCard />
    //     <MovieListCard />
    //     <MovieListCard />
    //   </div>
    // </div>
    <ErrorWindow errMsg={"We couldnt find any peoplet matchin g your search"} />
  );
};

export default MovieList;
