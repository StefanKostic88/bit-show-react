import React, { useEffect, useState, useContext } from "react";
import { MainContent, MovieList, Loader } from "../../components";

import { fetchMoviesList } from "../../services/services";

import { GlobalDataContext } from "../../store/GlobalContext/global-data-context";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  //[prvi put ucitava]

  const { searchedMovies } = useContext(GlobalDataContext);

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

  // useEffect(() => {
  //   setIsTyping(() => true);
  // }, [isTyping]);

  useEffect(() => {
    console.log();
    if (!searchedMovies) return;
    if (searchedMovies.length === 0) {
      console.log(searchedMovies.length);
      console.log();
      console.log(isTyping, "typing");
      // getLandingPageData();
      return;
    }

    setMovies(() => [...searchedMovies]);
  }, [searchedMovies]);

  return (
    <MainContent>
      {!movies ? <Loader /> : <MovieList movieList={movies} />}
    </MainContent>
  );
};

export default HomePage;
