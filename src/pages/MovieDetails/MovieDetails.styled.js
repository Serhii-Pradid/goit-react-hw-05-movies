import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
display: flex;;
font-size: 20px;
font-weight: 600;
margin-left: 40px;
margin-top: 15px;
margin-bottom: 15px;
  text-decoration: none;
  color: #515133;

  &:hover {
    font-weight: 800;
    
  };
`;

export const MovieContainer = styled.div`
  display: flex;
  padding: 30px;
  background-color: #6D6D54;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const MovieData = styled.div`
  display: flex;
  gap: 60px;
  padding: 20px;
  color: #fff;
  `;

  export const PosterImage = styled.img`
  width: 300px;
  height: auto;
  `;

export const Title = styled.h3`
display: block;
font-size: 20px;
font-weight: 600px;
margin-left: 40px;
margin: 30px, 0;
  text-decoration: none;
  color: #515133;
}`;


  export const CastRewiesField = styled.ul`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 30px;
  background-color: #6D6D54;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  `;

  export const CastRewies = styled.li``

  
export const CastRewiesLink = styled(NavLink)`
font-weight: 600;
font-size: 20px;
color: #ffffff66;
margin-right: 30px;
text-decoration: none;

&.active {
    color: #ececf1;
    font-size: 30px;
    font-weight: 600;
    transform: scale(1.4);
  };

  &:hover {
  color: #515133;
  };
`;




