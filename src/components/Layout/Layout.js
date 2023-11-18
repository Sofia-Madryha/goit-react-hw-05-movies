import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './Layout.styled';



export const Layout = () => {
  return (
    <Container>
      <Header>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
      </Header>

      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" />
    </Container>
  );
};
