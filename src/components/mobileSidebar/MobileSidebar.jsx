import React from 'react';
import {
  SidebarLimits,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
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
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarLimits>
    </>
  );
}
