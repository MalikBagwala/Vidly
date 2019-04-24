import _ from "lodash";

export default function paginate(movies, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(movies)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
