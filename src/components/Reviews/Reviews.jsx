import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilmReviews } from '../../helpers/fetch-beckend';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { movieId } = useParams();

  const [filmReviews, setFilmReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItem() {
      setLoading(true);
      try {
        const data = await getFilmReviews(movieId);
        setFilmReviews(data.results);
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
      {filmReviews.length > 0 ? (
        <ul>
          {filmReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
