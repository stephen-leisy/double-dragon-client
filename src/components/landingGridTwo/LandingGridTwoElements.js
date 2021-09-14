import styled from 'styled-components';

export const GridOneLimits = styled.main`
  height: 200vh;
  width: 100%;
  background: #cf7968;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  @media screen and (max-width: 1000px) {
    height: 140vh;
  }

  @media screen and (max-width: 780px) {
    height: 100vh;
  }

  @media screen and (max-width: 600px) {
    height: 200vh;
  }
`;

export const GridOneWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px 50px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridOneRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GridOneColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 50%;
  justify-content: flex-start;

  max-width: 50%;

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const GridOneColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 25%;
  max-width: 50%;
  justify-content: center;
  /* padding: 0 20px; */

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const GridOneImage = styled.img`
  margin-top: 40px;
  margin-right: 16px;
  /* margin-left: 40px; */
  vertical-align: middle;
  width: 80vmin;
  height: 80vmin;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
    height: 60vh;
    width: 60vh;
  }

  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 40vh;
  }

  @media screen and (max-width: 780px) {
    height: 30vh;
    width: 30vh;
  }

  @media screen and (max-width: 600px) {
    margin: 20px 0;
    height: 40vh;
    width: 40vh;
  }
`;

export const GridOneImage2 = styled.img`
  margin-top: 32px;
  margin-right: 16px;
  vertical-align: middle;
  width: 80vmin;
  height: 80vmin;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
    height: 60vh;
    width: 60vh;
  }

  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 40vh;
  }

  @media screen and (max-width: 780px) {
    height: 30vh;
    width: 30vh;
  }

  @media screen and (max-width: 600px) {
    margin: 20px 0;
    height: 40vh;
    width: 40vh;
  }
`;

export const GridOneImage3 = styled.img`
  margin-top: 40px;
  margin-left: 16px;
  vertical-align: middle;
  width: 80vmin;
  height: 80vmin;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
    height: 60vh;
    width: 60vh;
  }

  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 40vh;
  }

  @media screen and (max-width: 780px) {
    height: 30vh;
    width: 30vh;
  }

  @media screen and (max-width: 600px) {
    margin: 20px 0;
    height: 40vh;
    width: 40vh;
  }
`;

export const GridOneImage4 = styled.img`
  margin-top: 32px;
  margin-left: 16px;
  vertical-align: middle;
  width: 80vmin;
  height: 80vmin;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
    height: 60vh;
    width: 60vh;
  }

  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 40vh;
  }

  @media screen and (max-width: 780px) {
    height: 30vh;
    width: 30vh;
  }

  @media screen and (max-width: 600px) {
    margin: 20px 0;
    height: 40vh;
    width: 40vh;
  }
`;
