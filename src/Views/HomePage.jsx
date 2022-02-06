import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getPopularFilms } from '../helpers/fetch-beckend';

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const data = await getPopularFilms();
        console.log(data.results);
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
      <ul>
        {items.map(item => (
          <Link to="/" key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
};
