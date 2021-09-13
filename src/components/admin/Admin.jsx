import React, { useState } from 'react';
import CocktailForm from './CocktailForm';
import { cocktailEdit } from '../services/authApi';

export default function Admin() {
  const [drinkName, setDrinkName] = useState('');
  const [drinkPrice, setDrinkPrice] = useState('');
  const [drinkIngredients, setDrinkIngredients] = useState('');
  const [iconType, setIconType] = useState('big cube');
  const [route, setRoute] = useState('PUT');
  const [drinkId, setDrinkId] = useState('');

  const handleDrinkNameChange = ({ target }) => {
    setDrinkName(target.value);
  };

  const handleDrinkPriceChange = ({ target }) => {
    setDrinkPrice(target.value);
  };

  const handleDrinkIngredientChange = ({ target }) => {
    setDrinkIngredients(target.value);
  };

  const handleIconChange = ({ target }) => {
    setIconType(target.value);
  };

  const handleEditType = ({ target }) => {
    setRoute(target.value);
  };

  const handleId = ({ target }) => {
    setDrinkId(target.value);
  };

  const handleDrinkFormSubmit = (e) => {
    e.preventDefault();
    cocktailEdit(
      route,
      drinkName,
      iconType,
      drinkPrice,
      drinkIngredients,
      Number(drinkId)
    );
    setDrinkName('');
    setDrinkPrice(0);
    setDrinkIngredients('');
    setIconType('big cube');
  };

  console.log(
    'drink name',
    drinkName,
    'price',
    drinkPrice,
    'ingredients',
    drinkIngredients,
    'icon',
    iconType,
    'route',
    route,
    'id',
    drinkId
  );

  return (
    <main>
      <h1>secrets unlocked</h1>
      <section>
        <CocktailForm
          handleDrinkNameChange={handleDrinkNameChange}
          drinkName={drinkName}
          handleDrinkPriceChange={handleDrinkPriceChange}
          drinkPrice={drinkPrice}
          handleDrinkIngredientChange={handleDrinkIngredientChange}
          drinkIngredients={drinkIngredients}
          handleIconChange={handleIconChange}
          onSubmit={handleDrinkFormSubmit}
          handleEditType={handleEditType}
          handleId={handleId}
          drinkId={drinkId}
        />
      </section>
    </main>
  );
}
