import { generateMovie } from "../models/assets/helperFunctions";
import { generateShowInfo } from "../shared/helperFunctions";

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

export const fetchSingleShowInfo = async (showId) => {
  const res = await fetch(
    `https://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast&embed[]=crew&embed[]=akas&embed[]=episodes`
  );

  const {
    summary,
    rating,
    name,
    genres,
    image: { original },
    _embedded: { cast },
  } = await res.json();

  return generateShowInfo(name, summary, rating, cast, genres, original);
};

export const showInfoFunction = (setState, navigateTo) => {
  return async (showId) => {
    const res = await fetch(
      `https://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast&embed[]=crew&embed[]=akas&embed[]=episodes`
    );

    const {
      summary,
      rating,
      name,
      genres,
      image: { original },
      _embedded: { cast },
    } = await res.json();

    console.log(original);
    const newObject = generateShowInfo(
      name,
      summary,
      rating,
      cast,
      genres,
      original
    );
    console.log(newObject);
    setState(() => ({ ...newObject }));
    navigateTo(`/all-shows/${showId}`);
  };
};

// name,
//   summary,
//   rating,
//   cast,
//   genres,
//   image

////////////////////////////

// async (showId) => {
//   const res = await fetch(
//     `https://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast&embed[]=crew&embed[]=akas&embed[]=episodes`
//   );
//   const {
//     summary,
//     rating,
//     name,
//     _embedded: { cast },
//   } = await res.json();
//   // summary, rating.average, summary

//   const newObject = {
//     name,
//     rating: rating.average,
//     summary,
//     castList: cast.map(
//       ({
//         person: {
//           name,
//           image: { original },
//         },
//       }) => ({ name, image: original })
//     ),
//   };
//   setShowInfo(() => ({ ...newObject }));
//   navigate(`/all-shows/${showId}`);
//   //_embedded.cast -- niz > person.name, image.original
//   // console.log(data);

//   //prikupi id, fetch i navigate to
// },

// const generateShowInfo = (name, rating, summary, cast) => ({
//   name,
//   rating,
//   summary,
//   castList: cast.map(
//     ({
//       person: {
//         name,
//         image: { original },
//       },
//     }) => ({ name, image: original })
//   ),
// });
