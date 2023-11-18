import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const MovieContainer = styled.div`
  display: flex;
  margin: 15px;
`;
export const MoviePoster = styled.img`
  width: 250px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  gap: 20px;
`;

export const MovieTitle = styled.h1`
color: ${p => p.theme.colors.accent};
`

export const MovieSubtitle = styled.h3`
margin-bottom: 10px;
color: ${p => p.theme.colors.orange};
`

export const AddLink = styled(NavLink)`
text-decoration: none;
color: black;
;`

export const Button = styled.li`
margin: 10px;
background-color: ${p => p.theme.colors.orange};
color: ${p => p.theme.colors.black};
padding: 7px;
display: inline-block;
`

export const BackLink = styled(NavLink)`
text-decoration: none;
color: ${p => p.theme.colors.black};
display: inline-block;
padding: 7px;
margin: 5px;
background-color: ${p => p.theme.colors.orange};
`