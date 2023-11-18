import { SearchBar } from 'components/SearchBar/SearchBar';
import { TitleList } from 'components/TitleList/TitleList';
import { fetchMoviesByQuery } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MoviePage() {
  const [moviesDataByQuery, setMovieDataByQuery] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();
  const searchValue = queryParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) {
      return;
    } else {
      const getMoviesByQuery = async () => {
        try {
          const search = await fetchMoviesByQuery(searchValue);
          const moviesDataByQuery = search.data.results;
          setMovieDataByQuery([...moviesDataByQuery]);
        } catch (error) {
        } finally {
        }
      };
      getMoviesByQuery();
    }
  }, [searchValue]);

  const handleSubmit = value => {
    const newParams = value !== '' ? { query: value } : {};
console.log(newParams);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} query={searchValue} />
      {moviesDataByQuery && <TitleList movie={moviesDataByQuery} />}
    </div>
  );
}
