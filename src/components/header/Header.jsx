/* eslint-disable max-len */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import {
  HeaderLimits,
  HeaderContainer,
  DDLogo,
  MobileIcon,
  HeaderMenu,
  HeaderItem,
  NavLinks,
  LogoLink,
  SocialLink,
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
          <SocialLink
            as="a"
            href="https://www.instagram.com/doubledragonpdx/?hl=en"
            target="blank"
          >
            <ImInstagram />
          </SocialLink>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderLimits>
  );
}
