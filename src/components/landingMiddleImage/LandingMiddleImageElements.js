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
  height: 100%;
  object-fit: cover;
  overflow-x: hidden;

  @media screen and (max-width: 1030px) {
    height: 160vmin;
    width: 160vmin;
    object-fit: center;
    overflow: hidden;
    font-size: 3rem;
  }

  @media screen and (max-width: 780px) {
    height: 60vh;
    width: 400px;
    object-fit: center;
    overflow: hidden;
    font-size: 3rem;
  }

  @media screen and (max-width: 320px) {
    height: 40vh;
    width: 400px;
    object-fit: center;
    overflow: hidden;
  }
`;
