/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';

import Header from '../header/Header';
import Landing from '../landing/Landing';
import FadeIn from 'react-fade-in';

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerShow, setHeaderShow] = useState(true);
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

  useEffect(() => {
    setCurrentScroll(scrollY);
    scrollHeader();
  }, [scrollY]);

  return (
    <FadeIn transitionDuration={1000}>
      <Header headerShow={headerShow} scrollHeader={scrollHeader} />
      <Landing scroll={scrollY} />
      <Landing />
      <Landing />
    </FadeIn>
  );
}
