import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import { theme } from '../styles/theme';

export const Container = styled.div`
  margin: 0;
`;

export const HeaderStyled = styled.header`
  padding: 20px 60px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);

  font-size: 24px;
`;

export const LinkStyled = styled(NavLink)`
  padding: 5px;
  color: black;
  text-decoration: none;

  :first-of-type {
    margin-right: 20px;
  }

  &.active {
    padding: 4px 16px;
    color: #fff;
    background-color: #6161e9;
    border-radius: 5px;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: #0000ff;
  }
`;

export const SvgHome = styled.span`
  margin-right: 16px;
`;

export const SvgMovies = styled.span`
  margin-right: 16px;
`;
