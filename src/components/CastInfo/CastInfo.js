import { fetchMovieCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CastInfo = () => {
  const [movieCast, setMovieCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const moviesDataById = await fetchMovieCast(params.movieId);
        const movieCast = moviesDataById.data.cast;
        setMovieCast([...movieCast]);
      } catch (error) {}
    }

    getMovieCast();
  }, [params.movieId]);

  console.log(movieCast);

  return (
    <div>
      <ul>
        {movieCast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              width={200}
            ></img>
            <h3> {item.name}</h3>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
