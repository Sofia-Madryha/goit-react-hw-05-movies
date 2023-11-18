
import { MovieContainer, MovieInfo, MoviePoster, MovieSubtitle, MovieTitle } from './MovieDetails.styled';

export const MovieDetails = ({
  movie: { poster_path, title, vote_average, release_date, overview, genres },
  cast,
}) => {
  const date = new Date(release_date);
  const year = date.getFullYear();

  return (
    <MovieContainer>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={200}
      ></MoviePoster>
      <MovieInfo>
        <MovieTitle>
          {title} ({year})
        </MovieTitle>
        <p>User Score: {Math.ceil(vote_average * 10)}%</p>
        <MovieSubtitle>Overview</MovieSubtitle>
        <p>{overview}</p>{' '}
        <ul>
          <MovieSubtitle>Genres</MovieSubtitle>
          {genres.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </MovieInfo>
    </MovieContainer>
  );
};
