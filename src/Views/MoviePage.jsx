import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { getFilmBySearchName } from '../helpers/fetch-beckend';
import { FilmsList } from '../components/FilmsList/FilmsList';

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
          if (data.results.length === 0) {
            toast.error(
              'Search result not successful. Enter the correct movie name'
            );
            return;
          }

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
    const form = e.currentTarget;
    if (form.elements.query.value.trim() === '') {
      //Щоб не вводити пробіли в інпуті
      return;
    }

    setSearchParams({ query: form.elements.query.value });

    setTimeout(() => {
      form.reset();
    }, 1500);
  };

  return (
    <main>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Loader />}
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="query" placeholder="Enter name" />
        <button>Search</button>
      </form>
      {items.length > 0 && <FilmsList items={items} location={location} />}
    </main>
  );
};
