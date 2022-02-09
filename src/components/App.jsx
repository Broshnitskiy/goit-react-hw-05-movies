import { GlobalStyles } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainNavApp } from './MainNavApp/MainNavApp';
import { HomePage } from '../Views/HomePage';
import { MoviesPage } from '../Views/MoviePage';
import { MovieDetailsPage } from '../Views/MovieDetailsPage';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />

      <Routes>
        <Route path="/" element={<MainNavApp />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
