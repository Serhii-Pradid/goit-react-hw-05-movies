import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h3`
display: block;
font-size: 20px;
font-weight: 000px;
margin-left: 40px;
margin: 30px, 0;
  text-decoration: none;
  color: #515133;
}`;

export const MovieLink = styled(NavLink)`
  font-weight: 600;
  font-size: 15px;
  margin-right: 30px;
  text-decoration: none;
  &:hover
   {
    color: #515133;
    font-weight: 800;
    transform: scale(1.4);
  }
`;