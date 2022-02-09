import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilmCast } from '../../helpers/fetch-beckend';
import { Loader } from 'components/Loader/Loader';
import baseImg from '../../images/no-poster1.png';

export const Cast = () => {
  const { movieId } = useParams();

  const [filmCast, setFilmCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItem() {
      setLoading(true);
      try {
        const data = await getFilmCast(movieId);
        setFilmCast(data.cast);
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
      <ul>
        {filmCast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img
                width={200}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            ) : (
              <img width={200} src={`${baseImg}`} alt="no_image" />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
