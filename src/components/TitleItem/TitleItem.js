import { Link } from 'react-router-dom';

export const TitleItem = ({ title }) => {
  return <Link key={title.id}>{title.title || title.name}</Link>;
};
