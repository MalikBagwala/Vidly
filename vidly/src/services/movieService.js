import http from "./httpService";
const api = "http://localhost:3900/api/movies";
export async function getMovies() {
  const res = await http.get(api);
  return res.data;
}

export async function getMovie(id) {
  const res = await http.get(api + "/" + id);
  return res.data;
}

export async function saveMovie(id, movie) {
  if (id === undefined) {
    const res = await http.post(api, movie);
    return res.data;
  } else {
    console.log(api + "/" + id);
    const res = await http.put(api + "/" + id, movie);
    return res.data;
  }
}

export async function deleteMovie(id) {
  const res = await http.delete(api + "/" + id);
  return res.data;
}
export default getMovies;
