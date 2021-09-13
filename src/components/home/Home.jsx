/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../header/Header';
import Landing from '../landing/Landing';
import FadeIn from 'react-fade-in';

export default function Home() {
  const history = useHistory();

  return (
    <FadeIn transitionDuration={1000}>
      <Header />
      <Landing />
    </FadeIn>
  );
}
