import styled from 'styled-components';

export const MenuLimits = styled.main`
  background-color: #dcad37;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MenuWrapper = styled.div`
  height: 100%;
  width: 80%;
  padding-top: 25vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FoodImg = styled.img`
  width: 80vmin;
  height: 100vmin;
  margin-bottom: 30px;
  border: 4px #e28134 solid;

  /* @media screen and (max-width: 480px) {
    width: 40vmin;
    height: 60vmin;
  } */
`;

export const DrinkImg = styled.img`
  width: 80vmin;
  height: 100vmin;
  border: 4px #e28134 solid;
  margin-bottom: 30px;

  /* @media screen and (max-width: 480px) {
    width: 60vmin;
    height: 80vmin;
  } */
`;
