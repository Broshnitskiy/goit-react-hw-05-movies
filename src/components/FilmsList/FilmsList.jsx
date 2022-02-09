import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

FilmsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
  location: PropTypes.object,
};
