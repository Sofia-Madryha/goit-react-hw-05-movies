import { SearchBar } from 'components/SearchBar/SearchBar';
import { TitleList } from 'components/TitleList/TitleList';
import { fetchMoviesByQuery } from 'components/api';
import { useEffect, useState } from 'react';


export default function MoviePage() {
  const [query, setQuery] = useState('');
  const [moviesDataByQuery, setMovieDataByQuery] = useState([]);


  useEffect(() => {
    if (!query) {
      return;
    } else {
      const getMoviesByQuery = async () => {
        try {
          const search = await fetchMoviesByQuery(query);
          const moviesDataByQuery = search.data.results;
          setMovieDataByQuery([...moviesDataByQuery]);
        } catch (error) {
        } finally {
        }
      };
      getMoviesByQuery();
    }
  }, [query]);


 
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    let searchValue = form.elements.query.value;
    setQuery(searchValue);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} query={query}/>
      {moviesDataByQuery && <TitleList movie={moviesDataByQuery} />}
    </div>
  );
}
