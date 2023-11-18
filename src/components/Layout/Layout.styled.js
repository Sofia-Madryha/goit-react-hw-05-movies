import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: ${p => p.theme.spacing(3)};
padding: ${p => p.theme.spacing(2)} 0;
margin-bottom: ${p => p.theme.spacing(4)};


> nav {
  display: flex;
  gap: ${p => p.theme.spacing(3)}
}
`

export const Link = styled(NavLink)`
text-decoration: none;
color: black;
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;