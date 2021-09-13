import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CocktailList from '../cocktails/CocktailList';
import Header from '../header/Header';
import { getAllCocktails } from '../services/authApi';
import styles from './styles.css';

export default function Menu() {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktailList] = useState([]);
  const [windowWidth, setWidth] = useState('');
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    getAllCocktails()
      .then(setCocktailList)
      .finally(() => setLoading(false));
    function handleResize() {
      setWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(cocktails);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <main className={styles.menuPage}>
      <Header windowSize={windowWidth} className={styles.menuHeader} />
      <h1 className={styles.drinksHeader}>DRINKS</h1>
      <section className={styles.menu}>
        <CocktailList cocktails={cocktails} />
      </section>
    </main>
  );
}
