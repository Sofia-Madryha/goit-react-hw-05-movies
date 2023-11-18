import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

import { Layout } from './Layout';

import { CastInfo } from './CastInfo/CastInfo';
import { Reviews } from './Reviews/Reviews';

const Link = styled(NavLink)`
  &.acive {
    color: orange;
  }
`;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element= {<CastInfo />} />
          <Route path="reviews" element = {<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  );
};
