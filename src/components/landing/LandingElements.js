/* eslint-disable max-len */
import styled from 'styled-components';

export const LandingTopLimits = styled.main`
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  /* background: #cf7968; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopContainer = styled.div`
  /* position: relative;
  text-align: center; */
  width: 100vw;
  height: 180vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 780px) {
    height: 160vh;
  }
`;

export const TopImage = styled.div`
  background-image: url(${'https://www.foodrepublic.com/wp-content/uploads/2012/06/cocktail_tom_cruise_roger_donaldson_021_jpg_uqsg-700x496.jpg'});
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  background-position: 50% 60%;

  display: flex;
  align-items: center;
  justify-content: center;

  /* object-fit: cover;
  overflow-x: hidden;
  z-index: 1; */

  @media screen and (max-width: 1030px) {
    background-position: 25% 50%;
    background-attachment: local;
    /* height: 160vmin;
    width: 160vmin;

    font-size: 3rem; */
  }

  @media screen and (max-width: 780px) {
    /* height: 100vh;
    width: 900px; */
    background-position: 25% 50%;
    height: 160vh;
    /* left: 30px; */
  }

  @media screen and (max-width: 320px) {
    /* height: 100vh;
    width: 600px; */
    background-position: 25% 50%;
  }
`;

export const LandingText = styled.p`
  @media screen and (max-width: 780px) {
    padding: 20px;
  }
`;

export const TextBox = styled.div`
  height: 60%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 2.7rem;
  font-family: 'Corben', cursive;
  color: white;
  -webkit-text-stroke: 2px black;
  background: transparent;

  /* background-color: rgba(226, 129, 52, 0.15); */

  @media screen and (max-width: 780px) {
    font-size: 2rem;
    width: 80%;
    color: white;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;

    width: 100%;
    -webkit-text-stroke: 1px black;
    background-color: none;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
`;
