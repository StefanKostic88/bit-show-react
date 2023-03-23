import React, { useEffect, useState } from "react";
import { MainContent, MovieList, Loader } from "../../components";

import { fetchMoviesList } from "../../services/services";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  const getLandingPageData = async () => {
    const data = await fetchMoviesList();
    setMovies(() => [...data]);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getLandingPageData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainContent>
      {!movies ? <Loader /> : <MovieList movieList={movies} />}
    </MainContent>
  );
};

export default HomePage;
