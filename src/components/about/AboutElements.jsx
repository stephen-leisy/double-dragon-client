import styled from 'styled-components';

export const AboutLimits = styled.main`
  height: 140vh;
  width: 100%;
  background: #f28d48;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutWrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 25vh;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding-top: 7vh;
  }
`;

export const AboutText = styled.div`
  border: 15px solid #dcad37;
  height: 60%;
  width: 60%;
  font-family: 'Corben', cursive;
  color: white;
  font-size: 1.3rem;
  -webkit-text-stroke: 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f8f0e3;

  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 0.7rem;
    color: #f28d48;
    -webkit-text-stroke: 0.5px black;
  }
`;

export const Hours = styled.p``;

export const AddressHeader = styled.p`
  padding-top: 20px;
`;

export const Address = styled.p``;

export const RickRoll = styled.iframe`
  height: 60%;
  width: 60%;
  margin-top: 20px;
  border: 15px solid #dcad37;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const MapLink = styled.button`
  padding-top: 10px;
  font-size: 1.6rem;
  color: #f28d48;
  text-decoration: none;
  -webkit-text-stroke: 2px black;

  &.active {
    transform: scale(0.9);
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    -webkit-text-stroke: 2.3px black;
  }
`;
