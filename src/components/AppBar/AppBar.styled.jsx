import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 4px;
  text-decoration: none;
  gap: 30px;
  padding: 30px;
  color: #2a2a2a;
  /* gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text}; */

  &.active {
    background-color: #07c;
    color: #fff;
    /* background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white}; */
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #07c;
    /* color: ${p => p.theme.colors.primary}; */
  }
`;
