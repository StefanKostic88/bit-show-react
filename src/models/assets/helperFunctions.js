export const generateMovie = ({ image, name, rating, id }) => {
  return {
    img: image?.original,
    name,
    rating: rating?.average,
    id,
  };
};
