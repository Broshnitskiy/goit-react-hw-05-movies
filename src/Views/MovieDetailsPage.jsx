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
import baseImg from '../images/no-poster1.png';
import { IoArrowUndoOutline } from 'react-icons/io5';

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

  const { poster_path, vote_average, title, overview, genres, release_date } =
    filmItem;

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Loader />}
      <Link to={location?.state?.from ?? '/'}>
        <IoArrowUndoOutline /> Go back
      </Link>

      <>
        <div>
          {poster_path ? (
            <img
              width={250}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="poster"
            />
          ) : (
            <img width={250} src={`${baseImg}`} alt="no_image" />
          )}
        </div>

        <div>
          <h1>
            {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
          </h1>
          <p>User score: {Math.round((vote_average * 100) / 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && (
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
        </div>
      </>

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
