/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import {
  AboutLimits,
  AboutWrapper,
  AboutText,
  Hours,
  Address,
  AddressHeader,
  RickRoll,
  MapLink,
} from './AboutElements';
import useScrollPosition from '@react-hook/window-scroll';
import Header from '../header/Header';
import Sidebar from '../mobileSidebar/MobileSidebar';

export default function About() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerShow, setHeaderShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition(30 /*frames per second*/);

  const scrollHeader = () => {
    if (scrollY < 90) {
      setHeaderShow(true);
    } else if (scrollY < currentScroll) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setCurrentScroll(scrollY);
    scrollHeader();
    console.log(isOpen);
  }, [scrollY]);
  
  return (
    <AboutLimits>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header
        headerShow={headerShow}
        scrollHeader={scrollHeader}
        toggle={toggle}
      />
      <AboutWrapper>
        <AboutText>
          <Hours>OPEN:</Hours>
          <Hours>SUNDAY-THURSDAY</Hours>
          <Hours>12p-12a</Hours>
          <Hours>FRIDAY & SATURDAY</Hours>
          <Hours>12p-1a</Hours>
          <AddressHeader>LOCATED AT:</AddressHeader>
          <Address>1235 SE Division St, Portland, OR 97202</Address>

          <MapLink
            as="a"
            href="https://goo.gl/maps/o8j7yuTs5RosrBrT8"
            target="_blank"
          >
            MAP IT!
          </MapLink>
        </AboutText>
        <RickRoll src="https://www.youtube.com/embed/cvh0nX08nRw?autoplay=1"></RickRoll>
      </AboutWrapper>
    </AboutLimits>
  );
}
