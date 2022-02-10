import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { List, Link } from './MainNavApp.styled';

export const MainNavApp = () => {
  return (
    <>
      <header>
        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </List>
        </nav>
      </header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
