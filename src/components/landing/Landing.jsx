/* eslint-disable max-len */
import React from 'react';
import {
  LandingTopLimits,
  TopContainer,
  TopImage,
  LandingText,
  TextBox,
} from './LandingElements';

export default function Landing() {
  return (
    <>
      <LandingTopLimits>
        <TopContainer>
          <TopImage>
            <TextBox>
              <LandingText>We are open!</LandingText>
              <LandingText>Indoor dining? YES</LandingText>
              <LandingText>Mask? ALSO YES</LandingText>
              <LandingText>Vaccine? YES PLEASE!</LandingText>
              <LandingText>SUNDAY-THURSDAY</LandingText>
              <LandingText>12p-12a</LandingText>
              <LandingText>FRIDAY & SATURDAY</LandingText>
              <LandingText>12p-1a</LandingText>
            </TextBox>
          </TopImage>
        </TopContainer>
      </LandingTopLimits>
    </>
  );
}
