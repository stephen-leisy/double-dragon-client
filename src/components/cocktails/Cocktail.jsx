import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function Cocktail({
  cocktailName,
  cocktailPrice,
  cocktailIngredients,
  iconUrl,
}) {
  return (
    <div className={styles.cocktailWrapper}>
      <aside>
        <img src={iconUrl} className={styles.cocktailIcon} />
      </aside>
      <section className={styles.cocktailInfo}>
        <p>
          {cocktailName} ${cocktailPrice}
        </p>
        {cocktailIngredients}
      </section>
    </div>
  );
}

Cocktail.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  cocktailPrice: PropTypes.number.isRequired,
  cocktailIngredients: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};
