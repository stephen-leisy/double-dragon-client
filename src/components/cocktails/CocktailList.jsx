/* eslint-disable max-len */
import React from 'react';
import Cocktail from './Cocktail';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function CocktailList({ cocktails }) {
  return (
    <>
      <ul className={styles.cocktailMenu}>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>
            <Cocktail {...cocktail} />
          </li>
        ))}
      </ul>
    </>
  );
}

CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cocktailName: PropTypes.string.isRequired,
      iconUrl: PropTypes.string.isRequired,
      cocktailPrice: PropTypes.number.isRequired,
      cocktailIngredients: PropTypes.string.isRequired,
    })
  ),
};
