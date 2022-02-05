import { GlobalStyles } from './GlobalStyles';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainNavApp } from './MainNavApp/MainNavApp';
import { HomePage } from '../Views/HomePage';

export const App = () => {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<MainNavApp />}>
          <Route index element={<HomePage />} />
          {/* <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};