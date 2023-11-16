export const MovieDetails = ({
  movie: {
    poster_path,
    title,
    vote_average,
    release_date,
    overview,
    genres,
    id,
  },
}) => {
  const date = new Date(release_date);
  const year = date.getFullYear();
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="{title}"
        width={200}
      ></img>
      <h1>
        {title} ({year})
      </h1>
      <p>User Score: {Math.ceil(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>

      <ul>
        <h2>Genres</h2>
        {genres.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
