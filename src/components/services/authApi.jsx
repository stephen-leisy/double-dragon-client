const URL = 'https://double-dragon-server.herokuapp.com/api/v1/cocktails';

export const cocktailEdit = async (
  method,
  drinkName,
  iconType,
  drinkPrice,
  drinkIngredients,
  id
) => {
  if (method === 'POST') {
    await fetch(URL, {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cocktailName: drinkName,
        iconUrl: iconType,
        cocktailPrice: drinkPrice,
        cocktailIngredients: drinkIngredients,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  } else {
    await fetch(URL`/${id}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cocktailName: drinkName,
        iconUrl: iconType,
        cocktailPrice: drinkPrice,
        cocktailIngredients: drinkIngredients,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
};

export const getAllCocktails = async () => {
  const res = await fetch(URL);
  const json = await res.json();
  console.log('API', json);
  return json;
};
