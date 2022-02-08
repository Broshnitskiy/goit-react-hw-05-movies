import { useParams, Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getFilmById } from '../helpers/fetch-beckend';

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
        console.log(data);
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
      <Link to={location?.state?.from ?? '/'}>Go back</Link>

      <>
        {poster_path && (
          <div>
            <img
              width={250}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="poster"
            />
          </div>
        )}
        <div>
          <h1>
            {title} ({release_date})
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
            <NavLink to={'revievs'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
