import { fetchMovieCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastContainer, CastImg, CastItem } from './CastInfo.styled';

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
      <CastContainer>
        {movieCast.map(item => (
          <CastItem key={item.id}>
            <CastImg
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              width={200}
            ></CastImg>
            <h3> {item.name}</h3>
            <p>{item.character}</p>
          </CastItem>
        ))}
      </CastContainer>
    </div>
  );
};
