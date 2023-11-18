import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { AddLink, BackLink, Button, MovieSubtitle } from 'components/MovieDetails/MovieDetails.styled';
import { fetchMovieById } from 'components/api';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovie() {
      try {
        const moviesDataById = await fetchMovieById(params.movieId);
        const movieById = moviesDataById.data;
        console.log(movieById);
        setMovie(movieById);
      } catch (error) {}
    }

    getMovie();
  }, [params.movieId]);

  return (
    <div>
      <BackLink to={backLinkLocationRef.current}> Go back..</BackLink>
      {movie && 
      <MovieDetails movie={movie} /> } 
      <ul>
        <MovieSubtitle>Additional information</MovieSubtitle>
        <Button>
          <AddLink to={'cast'}> Cast</AddLink>
        </Button>
        <Button>
          <AddLink to={'reviews'}> Reviews</AddLink>
        </Button>
      </ul> 
      
       <Outlet />
    </div>
  );
}
