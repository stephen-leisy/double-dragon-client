import styled from 'styled-components';

export const LandingTopLimits = styled.main`
  height: 100vh;
  width: 100vw;
`;

export const TopContainer = styled.div`
  @media screen and (max-width: 780px) {
    /* padding-right: 400px; */
  }
`;

export const TopImage = styled.img`
  /* height: 10vh; */
  width: 100vw;

  @media screen and (max-width: 780px) {
    height: 100vh;
    width: 900px;
    object-fit: center;
    overflow: hidden;
  }

  @media screen and (max-width: 320px) {
    height: 100vh;
    width: 600px;
    object-fit: center;
    overflow: hidden;
  }
`;
