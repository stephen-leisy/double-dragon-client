/* eslint-disable max-len */
import React from 'react';

export default function CocktailForm({
  handleDrinkNameChange,
  drinkName,
  handleDrinkPriceChange,
  drinkPrice,
  handleDrinkIngredientChange,
  drinkIngredients,
  handleIconChange,
  onSubmit,
  handleEditType,
  handleId,
  drinkId,
}) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Cocktail Form</h1>
        <select id="edit type" name="edit type" onChange={handleEditType}>
          <option value="PUT">edit existing cocktail (recommended)</option>
          <option value="POST">new cocktail</option>
          <option value="DELETE">delete cocktail</option>
        </select>
        <input
          type="number"
          placeholder="id (edit and delete only)"
          onChange={handleId}
          value={drinkId}
        />
        <input
          type="text"
          placeholder="cocktail name"
          onChange={handleDrinkNameChange}
          value={drinkName}
        />
        <input
          type="number"
          placeholder="cocktail price"
          onChange={handleDrinkPriceChange}
          value={drinkPrice}
        />
        <input
          type="text"
          placeholder="cocktail ingredients"
          onChange={handleDrinkIngredientChange}
          value={drinkIngredients}
        />
        <label id="icon">icon image</label>
        <select id="icon" name="icon" onChange={handleIconChange}>
          <option value="big cube">big cube</option>
          <option value="https://image.flaticon.com/icons/png/512/955/955762.png">
            up
          </option>
          <option value="collins">collins</option>
          <option value="crushed ice">crushed ice</option>
          <option value="https://image.flaticon.com/icons/png/512/1210/1210764.png">
            standard rocks
          </option>
        </select>
        <button>Submit</button>
      </form>
    </>
  );
}
