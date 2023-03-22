import React, { useEffect, useState } from "react";
import { MainContent, MovieList } from "../../components";

import { fetchMoviesList } from "../../services/services";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const getLandingPageData = async () => {
    const data = await fetchMoviesList();

    setMovies(() => [...data]);
  };
  useEffect(() => {
    getLandingPageData();
  }, []);

  return (
    <MainContent>
      <MovieList movieList={movies} />
    </MainContent>
  );
};

export default HomePage;

//pagination should be hidden
