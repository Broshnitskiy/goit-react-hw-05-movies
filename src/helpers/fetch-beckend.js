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

export async function getFilmBySearchName(value) {
  const response = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${value}`
  );

  return response.data;
}

export async function getFilmReviews(movie_id) {
  const response = await axios.get(
    `/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
}

export async function getFilmCast(movie_id) {
  const response = await axios.get(
    `/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
}
