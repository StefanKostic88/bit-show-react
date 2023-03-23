export const generateShowInfo = (
  name,
  summary,
  rating,
  cast,
  genres,
  image
) => ({
  name,
  rating,
  summary: removeTextTags(summary),
  image: image,
  genreTags: genres.map((genre) => genre),
  castList: cast.map(
    ({
      person: {
        name,
        image: { original },
      },
    }) => ({ name, image: original })
  ),
});

const removeTextTags = (string) => {
  if (!string) return;
  return string
    .replaceAll("<p>", "")
    .replaceAll("<b>", "")
    .replaceAll("</b>", "")
    .replaceAll("</p>", "");
};
