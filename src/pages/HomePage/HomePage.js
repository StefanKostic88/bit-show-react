import React, { useEffect, useState, useContext } from "react";
import { MainContent, MovieList, Loader, ErrorWindow } from "../../components";

import { fetchMoviesList } from "../../services/services";

import { GlobalDataContext } from "../../store/GlobalContext/global-data-context";

const errorMsg = "We couldn't find any movie matching your search ";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { searchedMovies, resetFilteredState } = useContext(GlobalDataContext);

  const getLandingPageData = async () => {
    setIsLoading(() => true);
    const data = await fetchMoviesList();
    setMovies(() => [...data]);
    setIsLoading(() => false);
  };
  useEffect(() => {
    setHasError(() => false);

    const timer = setTimeout(() => {
      getLandingPageData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!searchedMovies) return;
    const { filteredMovies, searchInput } = searchedMovies;
    setMovies(() => [...filteredMovies]);
    if (filteredMovies.length === 0 && !searchInput) {
      getLandingPageData();
      return;
    }
    if (filteredMovies.length === 0 && searchInput) {
      resetFilteredState();

      setHasError(() => true);
      return;
    }
    setMovies(() => [...filteredMovies]);
    setHasError(() => false);
  }, [searchedMovies]);

  return (
    <MainContent>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorWindow errMsg={errorMsg} />
      ) : (
        <MovieList movieList={movies} />
      )}
    </MainContent>
  );
};

export default HomePage;
