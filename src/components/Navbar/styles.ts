import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #282c34;
  position: relative;
`;

export const NavbarWrap = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 1100px) {
    max-width: 90%;
  }
`;

export const NavbarLogo = styled('div')`
  color: #eaeaea;
  font-size: 1.5rem;
  font-family: 'Creepster', cursive;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavbarLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  width: 200px;
  @media screen and (max-width: 600px) {
    width: fit-content;
  }
`;

export const NavbarList = styled('ul')`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 0;
`;

export const NavbarListItem = styled('li')`
  height: 80px;
`;

export const NavbarLink = styled(NavLink)`
  color: #eaeaea;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 200ms ease-in-out;
  &:hover {
    color: #62a4ab;
  }
  &.active {
    border-bottom: 3px solid #62a4ab;
  }
`;
