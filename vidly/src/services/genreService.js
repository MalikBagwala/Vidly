import http from "./httpService";
const api = "http://localhost:3900/api/genres";
async function getGenres() {
  const res = await http.get(api);
  return res.data;
}

export default getGenres;
