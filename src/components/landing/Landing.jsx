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
          <TopImage src="https://www.foodrepublic.com/wp-content/uploads/2012/06/cocktail_tom_cruise_roger_donaldson_021_jpg_uqsg-700x496.jpg"></TopImage>
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
        </TopContainer>
      </LandingTopLimits>
    </>
  );
}
