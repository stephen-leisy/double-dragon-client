/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  PLaylistLimits,
  GridWrapper,
  GridColumnLeft,
  GridColumnRight,
  GridRow,
  GridImage,
  GridLink,
  ImageOverlay,
  HoverText,
  PlaylistHeader,
} from './PlaylistsElements';
import useScrollPosition from '@react-hook/window-scroll';
import Header from '../header/Header';
import Sidebar from '../mobileSidebar/MobileSidebar';

export default function Playlists() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerShow, setHeaderShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition(30 /*frames per second*/);

  const scrollHeader = () => {
    if (scrollY < 90) {
      setHeaderShow(true);
    } else if (scrollY < currentScroll) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setCurrentScroll(scrollY);
    scrollHeader();
    console.log(isOpen);
  }, [scrollY]);
  return (
    <PLaylistLimits>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header
        headerShow={headerShow}
        scrollHeader={scrollHeader}
        toggle={toggle}
      />
      <GridWrapper>
        <PlaylistHeader>Bring the vibes home</PlaylistHeader>
        <GridRow>
          <GridColumnLeft>
            <GridLink
              as="a"
              href="https://open.spotify.com/playlist/4MxUW9k69LSG1yeD9vBIYF?si=56a5449d0b664695"
            >
              <GridImage src="/playlist1.png" alt="seabird"></GridImage>
              <ImageOverlay>
                <HoverText>Seabird</HoverText>
              </ImageOverlay>
            </GridLink>
            <GridLink
              as="a"
              href="https://open.spotify.com/playlist/6gZX5xTeIf3FcXkqnzd9rb?si=aed4be021ac74669"
            >
              <GridImage src="/Playlist2.png" alt="seabird"></GridImage>
              <ImageOverlay>
                <HoverText>Space Lounge: Break Glass</HoverText>
              </ImageOverlay>
            </GridLink>
          </GridColumnLeft>
          <GridColumnRight>
            <GridLink
              as="a"
              href="https://open.spotify.com/playlist/0QiFPTl8G0XyD0wZjvhYco?si=bd364b1a56cc4d9a"
            >
              <GridImage src="/playlist3.png" alt="seabird"></GridImage>
              <ImageOverlay>
                <HoverText>Big Chill</HoverText>
              </ImageOverlay>
            </GridLink>
            <GridLink
              as="a"
              href="https://open.spotify.com/playlist/0KFyHovrujiWbXLuy6h1qV?si=60d74aa10e0f4e50"
            >
              <GridImage src="/playlist4.png" alt="seabird"></GridImage>
              <ImageOverlay>
                <HoverText>Palm Springs: Break Glass</HoverText>
              </ImageOverlay>
            </GridLink>
          </GridColumnRight>
        </GridRow>
      </GridWrapper>
    </PLaylistLimits>
  );
}
