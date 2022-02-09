import baseImg from '../../images/no-poster1.png';

export const FilmDetails = ({ filmData }) => {
  const { poster_path, vote_average, title, overview, genres, release_date } =
    filmData;

  return (
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
  );
};
