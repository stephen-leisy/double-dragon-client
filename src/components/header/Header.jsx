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

export default function Header({ headerShow, toggle }) {
  return (
    <HeaderLimits headerShow={headerShow}>
      <HeaderContainer>
        <DDLogo src="/DD logo.png"></DDLogo>
        <MobileIcon onClick={toggle}>
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
