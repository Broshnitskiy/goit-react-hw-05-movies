import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getPopularFilms } from '../helpers/fetch-beckend';
import { FilmsList } from '../components/FilmsList/FilmsList';

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const data = await getPopularFilms();

        setItems(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  return (
    <main>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Loader />}
      <h1>Trending today</h1>
      {items.length > 0 && <FilmsList items={items} location={location} />}
    </main>
  );
};
