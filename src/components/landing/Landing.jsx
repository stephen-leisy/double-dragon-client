/* eslint-disable max-len */
import React from 'react';
import {
  LandingTopLimits,
  TopContainer,
  TopImage,
  LandingText,
} from './LandingElements';

export default function Landing() {
  return (
    <>
      <LandingTopLimits>
        <TopContainer>
          <TopImage src="https://www.foodrepublic.com/wp-content/uploads/2012/06/cocktail_tom_cruise_roger_donaldson_021_jpg_uqsg-700x496.jpg"></TopImage>
          <LandingText>We are open!</LandingText>
        </TopContainer>
      </LandingTopLimits>
    </>
  );
}
