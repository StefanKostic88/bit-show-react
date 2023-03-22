import { generateMovie } from "../models/assets/helperFunctions";

export const fetchMoviesList = async (curPage = 0) => {
  const res = await fetch(`http://api.tvmaze.com/shows?page=${curPage}`);
  const data = await res.json();
  if (!curPage) {
    return data
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 50)
      .map((movie) => generateMovie(movie));
  }
};
