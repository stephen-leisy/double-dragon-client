import styled from 'styled-components';

export const LandingTopLimits = styled.main`
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
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
  overflow-x: hidden;

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

export const LandingText = styled.p`
  position: absolute;
  top: 50%;
  left: 45%;
  font-size: 3rem;
  font-family: 'Corben', cursive;
  color: white;
  -webkit-text-stroke: 1px black;

  @media screen and (max-width: 500px) {
    left: 2%;
    top: 40%;
  }
`;
