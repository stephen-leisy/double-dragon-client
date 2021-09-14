import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  HeaderLimits,
  HeaderContainer,
  DDLogo,
  MobileIcon,
  HeaderMenu,
  HeaderItem,
  NavLinks,
  LogoLink,
} from './HeaderElements';

export default function Header({ headerShow, toggle }) {
  return (
    <HeaderLimits headerShow={headerShow}>
      <HeaderContainer>
        <LogoLink to="/">
          <DDLogo src="/DD logo.png"></DDLogo>
        </LogoLink>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <HeaderMenu>
          <HeaderItem>
            <NavLinks to="/menu">Menu</NavLinks>
          </HeaderItem>
          <HeaderItem>
            <NavLinks to="/About">About</NavLinks>
          </HeaderItem>
          <HeaderItem>
            <NavLinks to="/Playlists">Playlist</NavLinks>
          </HeaderItem>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderLimits>
  );
}
