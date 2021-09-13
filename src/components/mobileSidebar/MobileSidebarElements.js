import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarLimits = styled.main`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #f8f0e3;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  overflow-x: visible;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)``;

export const SidebarWrapper = styled.div``;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  font-family: 'Corben', cursive;
  color: white;
  -webkit-text-stroke: 1px black;
  text-shadow: -0.1925rem -0.1925rem 0 #cf7968;

  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    -webkit-text-stroke: 1.7px black;

    text-decoration: underline white;
  }
`;