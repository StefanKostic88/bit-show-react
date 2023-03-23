import React, { useEffect, useState } from "react";
import { MainContent, MovieList } from "../../components";

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

  if (!movies) return <div>Loading...</div>;

  return (
    <MainContent>
      <MovieList movieList={movies} />
    </MainContent>
  );
};

export default HomePage;

//pagination should be hidden
