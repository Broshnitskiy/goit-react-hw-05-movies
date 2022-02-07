import { useParams, Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getFilmById } from '../helpers/fetch-beckend';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [filmItem, setFilmItem] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(filmItem);

  useEffect(() => {
    async function fetchItem() {
      setLoading(true);
      try {
        const data = await getFilmById(movieId);
        setFilmItem(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [movieId]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Loader />}
      <Link to="/">Go back</Link>
      <div>
        {filmItem.poster_path && (
          <img
            width={250}
            src={`https://image.tmdb.org/t/p/w500${filmItem.poster_path}`}
            alt=""
          />
        )}
      </div>
      <div>
        <h1>{filmItem.title}</h1>
        <p>gdfd</p>
        <h2>gfdfg</h2>
        <p>dfgdf</p>
        <h2>gfdg</h2>
        <p>dgfg</p>
      </div>
      <div>
        <p>Aditional information</p>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'revievs'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
