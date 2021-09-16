import React from 'react';
import { ImInstagram } from 'react-icons/im';
import {
  SidebarLimits,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SocialLink,
} from './MobileSidebarElements';

export default function MobileSidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarLimits isOpen={isOpen} onClick={toggle}>
        <Icon onCLick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/menu" onClick={toggle}>
              Menu
            </SidebarLink>
            <SidebarLink to="/About" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="/Playlists" onClick={toggle}>
              Playlists
            </SidebarLink>
            <SocialLink
              as="a"
              href="https://www.instagram.com/doubledragonpdx/?hl=en"
              target="blank"
            >
              <ImInstagram />
            </SocialLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarLimits>
    </>
  );
}
