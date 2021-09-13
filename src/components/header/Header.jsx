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
} from './HeaderElements';

export default function Header() {
  return (
    <HeaderLimits>
      <HeaderContainer>
        <DDLogo src="/DD logo.png"></DDLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <HeaderMenu>
          <HeaderItem>
            <NavLinks to="/menu">Menu</NavLinks>
          </HeaderItem>
          <HeaderItem>
            <NavLinks to="">About</NavLinks>
          </HeaderItem>
          <HeaderItem>
            <NavLinks>Playlist</NavLinks>
          </HeaderItem>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderLimits>
  );
}
