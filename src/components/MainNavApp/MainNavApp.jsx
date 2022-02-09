import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

export const MainNavApp = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </header>
  );
};
