import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      try {
        const moviesDataById = await fetchMovieById(params.movieId);
        const movieById = moviesDataById.data;
        console.log(movieById);
        setMovie(movieById)
      } catch (error) {}
    }

    getMovie();
  }, [params.movieId]);

  return (
   <div>
    {movie && <MovieDetails movie = {movie}/>}
   </div>
  );
}
