import {
  useParams,
  Link,
  NavLink,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getFilmById } from '../helpers/fetch-beckend';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { FilmDetails } from '../components/FilmDetails/FilmDetails';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [filmItem, setFilmItem] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <Link to={location?.state?.from ?? '/'}>
        <IoArrowUndoOutline /> Go back
      </Link>

      <FilmDetails filmData={filmItem} />

      <div>
        <p>Aditional information</p>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
