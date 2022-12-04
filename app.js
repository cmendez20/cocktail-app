async function getCocktailData() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  renderData(data);
}

const renderData = (data) => {
  console.log(data.drinks[0]);
  const drink = data.drinks[0];
  const html = `
    <section class='drink'>
      <h2 class='drink-name'>${drink.strDrink}</h2>

      <img class="drink-img"
        src=${drink.strDrinkThumb}
        alt=${drink.strDrink} cocktail drink
      >
      <p>${drink.strAlcoholic}</p>
      <p>Ingredient 1: ${drink.strIngredient1}</p>
      <p>Ingredient 2: ${drink.strIngredient2}</p>
      <p>Ingredient 3: ${drink.strIngredient3}</p>
    </section>
  `;

  document.querySelector("section").innerHTML = html;
};

getCocktailData();
