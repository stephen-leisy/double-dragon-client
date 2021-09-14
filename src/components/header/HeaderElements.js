import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const HeaderLimits = styled.main`
  transition: 0.6s ease-in-out;
  top: 0;
  opacity: ${({ headerShow }) => (headerShow ? '100%' : '0')};
  top: ${({ headerShow }) => (headerShow ? '0' : '-100%')};
  background: rgba(0, 0, 0, 0.05);

  height: 30vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  font-size: 2rem;
`;

export const HeaderContainer = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  z-index: 1;
  width: 100vw;
  background: transparent;

  @media screen and (max-width: 780px) {
    padding: 20px 20px;
  }
`;

export const DDLogo = styled.img`
  height: 25vmin;
  overflow-x: visible;
  background: transparent;
  display: flex;
  align-items: center;
  justify-self: flex-start;

  @media screen and (max-width: 780px) {
    height: 20vmin;
  }

  @media screen and (max-width: 320px) {
    height: 25vmin;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
    -webkit-text-stroke: 0.25px black;
    background: transparent;
    color: white;
    -webkit-text-stroke: 1px black;
  }

  @media screen and (max-width: 320px) {
    font-size: 2.6rem;
  }
`;

export const HeaderMenu = styled.ul`
  background: transparent;
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: flex-end;

  list-style: none;
  text-align: center;
  overflow-x: visible;

  /* font-size: 30 rem; */

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderItem = styled.li`
  /* height: 80px; */
  background: transparent;
  overflow-x: visible;
  padding: 20px;
`;

export const NavLinks = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  overflow-x: visible;
  background: transparent;
  /* font-size: 1.1rem; */
  cursor: pointer;
  font-family: 'Corben', cursive;
  color: white;
  -webkit-text-stroke: 1px black;
  text-shadow: -0.1925rem -0.1925rem 0 #cf7968;

  &.active {
    border-bottom: 3px solid white;
    transform: scale(0.9);
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    -webkit-text-stroke: 1.7px black;

    text-decoration: underline white;
  }
`;
