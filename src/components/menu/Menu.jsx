import React, { useEffect, useState } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { MenuLimits, MenuWrapper, FoodImg, DrinkImg } from './MenuElements';
import Header from '../header/Header';
import Sidebar from '../mobileSidebar/MobileSidebar';

export default function Menu() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerShow, setHeaderShow] = useState(true);
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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setCurrentScroll(scrollY);
    scrollHeader();
    console.log(isOpen);
  }, [scrollY]);
  return (
    <>
      <MenuLimits>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Header
          headerShow={headerShow}
          scrollHeader={scrollHeader}
          toggle={toggle}
        />

        <MenuWrapper>
          <FoodImg src="/food.png"></FoodImg>
          <DrinkImg src="/drink.png"></DrinkImg>
        </MenuWrapper>
      </MenuLimits>
    </>
  );
}
