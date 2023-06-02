import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/*export const Container = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
}`;*/

export const Nav = styled.nav`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #6D6D54;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyleNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 30px;
  color: #ffffff66;
  margin-right: 30px;
  text-decoration: none;
  &.active {
    color: #ececf1;
    font-size: 33px;
    font-weight: 600;
    transform: scale(1.4);
  };
  &:hover {
    color: #515133;
    };
`;