/* eslint-disable max-len */
import React from 'react';
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
} from './PlaylistsElements';

export default function Playlists() {
  return (
    <PLaylistLimits>
      <GridWrapper>
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
