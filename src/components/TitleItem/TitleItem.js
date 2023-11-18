import { useLocation } from 'react-router-dom';
import { MovieLink } from './TitleItem.styled';

export const TitleItem = ({ title }) => {
  const location = useLocation();

  return <MovieLink to={`/movies/${title.id}`} state = {{from: location}} key={title.id}>{title.title || title.name}</MovieLink>;
};
