import baseImg from '../../images/no-poster1.png';
import PropTypes from 'prop-types';
import { Wrapper, WrapperImg, Container } from './FilmDetails.styled';

export const FilmDetails = ({ filmData }) => {
  const { poster_path, vote_average, title, overview, genres, release_date } =
    filmData;

  return (
    <Wrapper>
      <WrapperImg>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="poster"
          />
        ) : (
          <img src={`${baseImg}`} alt="no_image" />
        )}
      </WrapperImg>

      <Container>
        <h1>
          {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
        </h1>
        <p>User score: {Math.round((vote_average * 100) / 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>

        {genres && (
          <>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

FilmDetails.propTypes = {
  filmData: PropTypes.object.isRequired,
};
