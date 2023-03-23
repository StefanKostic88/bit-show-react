import { generateMovie } from "../models/assets/helperFunctions";

export const fetchMoviesList = async (curPage = 0) => {
  try {
    const res = await fetch(`http://api.tvmaze.com/shows?page=${curPage}`);
    const data = await res.json();
    if (!res.ok) throw new Error();
    if (!curPage) {
      return data
        .sort((a, b) => b.rating.average - a.rating.average)
        .slice(0, 50)
        .map((movie) => generateMovie(movie));
    }
  } catch (error) {
    console.log(error.message);
  }
};
