import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.css';
import FadeIn from 'react-fade-in';

export default function MobileNav() {
  const history = useHistory();

  const handleNavClick = ({ target }) => {
    if (target.value === 'menu') {
      history.push('/menu');
    } else if (target.value === 'contact') {
      console.log('dope');
    } else if (target.value === 'home') {
      history.push('/');
    } else {
      console.log('yeaaah boi');
    }
  };
  return (
    <FadeIn transitionDuration={1000}>
      <main className={styles.mobileLinks}>
        {' '}
        <button value={'menu'} onClick={handleNavClick}>
          Menu
        </button>
        <button value={'contact'} onClick={handleNavClick}>
          Contact
        </button>
        <button value={'playlists'} onClick={handleNavClick}>
          Playlists
        </button>
        <button value={'home'} onClick={handleNavClick}>
          Home
        </button>
      </main>
    </FadeIn>
  );
}
