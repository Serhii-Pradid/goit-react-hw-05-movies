import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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