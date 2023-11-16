import { Link } from 'react-router-dom';

export const TitleItem = ({ title }) => {
  return <Link to={`/movies/${title.id}`} key={title.id}>{title.title || title.name}</Link>;
};
