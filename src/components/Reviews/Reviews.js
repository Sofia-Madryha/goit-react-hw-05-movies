import { fetchMovieReview } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [movieReview, setMovieReview] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getMovieReview() {
      try {
        const moviesDataById = await fetchMovieReview(params.movieId);
        const MovieReview = moviesDataById.data.results;
        console.log(MovieReview);
        setMovieReview([...MovieReview]);
      } catch (error) {}
    }

    getMovieReview();
  }, [params.movieId]);

  return (
    <div>
        
      {movieReview.length > 0 ? (
        <ul>
          {movieReview.map(item => (
            <li key={item.id}>
              <h3> Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are not any reviews for this movie</p>
      )}
    </div>
  );
};
