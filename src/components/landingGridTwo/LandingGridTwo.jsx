/* eslint-disable max-len */
import React from 'react';
import {
  GridOneLimits,
  GridOneWrapper,
  GridOneImage,
  GridOneImage2,
  GridOneImage3,
  GridOneImage4,
  GridOneRow,
  GridOneColumnLeft,
  GridOneColumnRight,
} from './LandingGridTwoElements';

export default function LandingGridTwo() {
  return (
    <>
      <GridOneLimits>
        <GridOneWrapper>
          <GridOneRow>
            <GridOneColumnLeft>
              <GridOneImage
                src="https://www.closerweekly.com/wp-content/uploads/2016/03/national-lampoons-vacation-cast.jpg?resize=1200%2C1200"
                alt="vacation"
              ></GridOneImage>
              <GridOneImage2
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqDW-JqCFiiyV83nx404Uf_rwhxPKf0dS_-1le26DlNQT48bAsEqajykrNAIUPodMKlM&usqp=CAU"
                alt="roadhouse"
              ></GridOneImage2>
            </GridOneColumnLeft>
            <GridOneColumnRight>
              <GridOneImage3
                src="https://www.reellifewithjane.com/wp-content/uploads/2010/11/buffy-movie-1992-2.jpg"
                alt="buffy"
              ></GridOneImage3>
              <GridOneImage4
                src="https://ogden_images.s3.amazonaws.com/www.utne.com/images/2013/05/26145114/EF471A58021C42598444F77BDAD86685.jpg"
                alt="prettyinpink"
              ></GridOneImage4>
            </GridOneColumnRight>
          </GridOneRow>
        </GridOneWrapper>
      </GridOneLimits>
    </>
  );
}
