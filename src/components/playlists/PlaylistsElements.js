import styled from 'styled-components';

export const PLaylistLimits = styled.main`
  background: #eca481;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px 50px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: purple 2px solid;
`;

export const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GridColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 50%;
  justify-content: flex-start;

  max-width: 50%;

  @media screen and (max-width: 800px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const GridColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 25%;
  max-width: 50%;
  justify-content: center;
  /* padding: 0 20px; */

  @media screen and (max-width: 800px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const GridImage = styled.img`
  margin-top: 40px;
  margin-right: 16px;
  display: block;
  border: red 2px solid;
  /* margin-left: 40px; */
  vertical-align: middle;
  width: 60vmin;
  height: 60vmin;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
    height: 60vh;
    width: 60vh;
  }

  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 40vh;
  }

  /* @media screen and (max-width: 780px) {
    height: 30vh;
    width: 30vh;
  } */

  @media screen and (max-width: 600px) {
    margin: 20px 0;
    height: 40vh;
    width: 40vh;
  }
`;

export const GridLink = styled.button`
  position: relative;

  /* &:hover {
    opacity: 1;
  } */
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 93.5%;
  width: 97.5%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(226, 129, 52, 0.65);
  margin-top: 40px;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    height: 89.5%;
    width: 97.5%;
  }
`;

export const HoverText = styled.h2`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: 'Corben', cursive;
  color: white;
  font-size: 4rem;
  -webkit-text-stroke: 1px black;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

// export const GridOneImage2 = styled.img`
//   margin-top: 32px;
//   margin-right: 16px;
//   vertical-align: middle;
//   width: 80vmin;
//   height: 80vmin;
//   object-fit: cover;

//   @media screen and (max-width: 1300px) {
//     height: 60vh;
//     width: 60vh;
//   }

//   @media screen and (max-width: 1000px) {
//     height: 40vh;
//     width: 40vh;
//   }

//   @media screen and (max-width: 780px) {
//     height: 30vh;
//     width: 30vh;
//   }

//   @media screen and (max-width: 600px) {
//     margin: 20px 0;
//     height: 40vh;
//     width: 40vh;
//   }
// `;

// export const GridOneImage3 = styled.img`
//   margin-top: 40px;
//   margin-left: 16px;
//   vertical-align: middle;
//   width: 80vmin;
//   height: 80vmin;
//   object-fit: cover;

//   @media screen and (max-width: 1300px) {
//     height: 60vh;
//     width: 60vh;
//   }

//   @media screen and (max-width: 1000px) {
//     height: 40vh;
//     width: 40vh;
//   }

//   @media screen and (max-width: 780px) {
//     height: 30vh;
//     width: 30vh;
//   }

//   @media screen and (max-width: 600px) {
//     margin: 20px 0;
//     height: 40vh;
//     width: 40vh;
//   }
// `;

// export const GridOneImage4 = styled.img`
//   margin-top: 32px;
//   margin-left: 16px;
//   vertical-align: middle;
//   width: 80vmin;
//   height: 80vmin;
//   object-fit: cover;

//   @media screen and (max-width: 1300px) {
//     height: 60vh;
//     width: 60vh;
//   }

//   @media screen and (max-width: 1000px) {
//     height: 40vh;
//     width: 40vh;
//   }

//   @media screen and (max-width: 780px) {
//     height: 30vh;
//     width: 30vh;
//   }

//   @media screen and (max-width: 600px) {
//     margin: 20px 0;
//     height: 40vh;
//     width: 40vh;
//   }
// `;
