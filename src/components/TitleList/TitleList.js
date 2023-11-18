import { TitleItem } from 'components/TitleItem/TitleItem';
import { MovieList } from './TitleList.styled';

export const TitleList = ({ movie }) => {
  return (
    <ul>
      {movie.map(item => (
        <MovieList key={item.id}>
          <TitleItem title={item} />
        </MovieList>
      ))}
    </ul>
  );
};
