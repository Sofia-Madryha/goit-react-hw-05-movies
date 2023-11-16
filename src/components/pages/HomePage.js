import { TitleList } from 'components/TitleList/TitleList';
import { fetchTrending } from 'components/api';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [movieData, setMovieData] = useState([]);
//   const [movie, setMovie] = useState([]);

  useEffect(() => {
    //fetch data
    async function getTitles() {
      const movies = await fetchTrending();
      const moviesData = movies.data.results;

      setMovieData([...moviesData]);
    //   setMovie([...moviesData.map(item => item.title || item.name)]);
    }
    getTitles();
  }, []);


  return <TitleList movie={movieData} />;
}
