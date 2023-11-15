import { TitleItem } from 'components/TitleItem/TitleItem';

export const TitleList = ({ movie }) => {
  return (
    <ul>
    
      {movie.map(item => (
        <li key={item.id}>
          <TitleItem title={item} />
        </li>
      ))}
    </ul>
  );
};
