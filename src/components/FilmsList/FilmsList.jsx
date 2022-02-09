import { Link } from 'react-router-dom';

export const FilmsList = ({ items, location }) => {
  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
