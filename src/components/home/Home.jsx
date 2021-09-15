/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';

import Header from '../header/Header';
import Sidebar from '../mobileSidebar/MobileSidebar';
import Landing from '../landing/Landing';
import LandingGridOne from '../landingGridOne/LandingGridOne';
import LandingMiddleImage from '../landingMiddleImage/LandingMiddleImage';
import LandingGridTwo from '../landingGridTwo/LandingGridTwo';
import FadeIn from 'react-fade-in';

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerShow, setHeaderShow] = useState(true);
  const [imageShow, setImageShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition(30 /*frames per second*/);

  const scrollHeader = () => {
    if (scrollY < 248) {
      setHeaderShow(true);
    } else if (scrollY < currentScroll) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  const scrollImage = () => {
    if (scrollY > 200) {
      setImageShow(true);
    } else {
      setImageShow(false);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setCurrentScroll(scrollY);
    scrollHeader();
    scrollImage();
  }, [scrollY]);

  return (
    <FadeIn transitionDuration={1000}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header
        headerShow={headerShow}
        scrollHeader={scrollHeader}
        toggle={toggle}
      />
      <Landing scroll={scrollY} />
      <LandingGridOne imageShow={imageShow} />
      <LandingMiddleImage />
      <LandingGridTwo />
    </FadeIn>
  );
}
