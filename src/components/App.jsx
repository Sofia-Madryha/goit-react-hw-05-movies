import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';

const Link = styled(NavLink)`
  &.acive {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
      </Routes>
    </div>
  );
};
