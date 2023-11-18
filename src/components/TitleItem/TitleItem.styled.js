import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MovieLink = styled(NavLink)`
text-decoration: none;
color: black;
display: block;
margin: 15px;
padding: 10px;
border-radius: 10px;
background-color: ${p => p.theme.colors.orange};`