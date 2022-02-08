import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getFilmBySearchName } from '../helpers/fetch-beckend';

export const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      async function fetchItems() {
        setLoading(true);
        try {
          const data = await getFilmBySearchName(query);

          setItems(data.results);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchItems();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });

    e.currentTarget.reset();
  };

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Loader />}
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="query" placeholder="Enter name" />
        <button>Search</button>
      </form>
      {items.length > 0 && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
