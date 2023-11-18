import { CastInfo } from 'components/CastInfo/CastInfo';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById, fetchMovieCast } from 'components/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      try {
        const moviesDataById = await fetchMovieById(params.movieId);
        const movieById = moviesDataById.data;
        console.log(movieById);
        setMovie(movieById);
      } catch (error) {

      }
    }

    getMovie();
  }, [params.movieId]);

  return (
    <div>
      {movie && <MovieDetails movie={movie} /> }

      <ul>
      <h2>Additional information</h2>
        <li>
          <Link to={'cast'}> Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}> Reviews</Link>
        </li>
      </ul>
      {/* {movieCast && <CastInfo  cast ={movieCast} />} */}

      <Outlet />
    </div>
  );
}
