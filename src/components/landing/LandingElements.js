import styled from 'styled-components';

export const LandingTopLimits = styled.main`
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  background: #cf7968;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 100%;
  object-fit: cover;
  overflow-x: hidden;
  z-index: 1;

  @media screen and (max-width: 1030px) {
    height: 160vmin;
    width: 160vmin;
    object-fit: center;
    overflow: hidden;
    font-size: 3rem;
  }

  @media screen and (max-width: 780px) {
    height: 100vh;
    width: 900px;
    object-fit: center;
    overflow: hidden;
    font-size: 3rem;
  }

  @media screen and (max-width: 320px) {
    height: 100vh;
    width: 600px;
    object-fit: center;
    overflow: hidden;
  }
`;

export const LandingText = styled.p``;

export const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 34%;
  font-size: 2.7rem;
  font-family: 'Corben', cursive;
  color: #eca481;
  -webkit-text-stroke: 2px black;
  background: transparent;

  /* background-color: rgba(226, 129, 52, 0.65); */

  @media screen and (max-width: 500px) {
    left: 7%;
    top: 40%;
    font-size: 1.4rem;
    -webkit-text-stroke: 1px black;
  }
`;
