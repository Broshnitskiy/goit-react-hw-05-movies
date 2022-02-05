import { Outlet, NavLink } from 'react-router-dom';

export const MainNavApp = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movie">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};
