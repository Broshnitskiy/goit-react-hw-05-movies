import axios from 'axios';
const API_KEY = 'b62c635c7989a5db57e410f2e5aadf4e';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getPopularFilms() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);

  return response.data;
}

export async function getFilmById(movie_id) {
  const response = await axios.get(
    `/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
}
