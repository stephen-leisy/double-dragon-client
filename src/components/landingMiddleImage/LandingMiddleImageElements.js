/* eslint-disable max-len */
import styled from 'styled-components';

export const LandingTopLimits = styled.main`
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  background: #cf7968;
`;

export const TopContainer = styled.div`
  position: relative;
  text-align: center;

  @media screen and (max-width: 780px) {
    /* padding-right: 400px; */
  }
`;

export const TopImage = styled.img`
  width: 100vw;
  height: 100vh;
  /* object-fit: cover; */
  overflow-x: hidden;
  background-image: url(${'https://assets.mubicdn.net/images/notebook/post_images/26585/images-w1400.jpg?1536644601'});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 1030px) {
    background-position: 25% 50%;
    /* height: 160vmin;
    width: 160vmin;

    font-size: 3rem; */
  }

  @media screen and (max-width: 780px) {
    /* height: 100vh;
    width: 900px; */
    background-position: 60% 50%;
    /* left: 30px; */
  }

  @media screen and (max-width: 320px) {
  }
`;
