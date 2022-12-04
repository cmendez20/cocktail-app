const main = document.querySelector("main");

async function getCocktailData() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  renderData(data);
}

const renderData = (data) => {
  console.log(data.drinks[0]);
  const drinkSection = document.createElement("section");
  drinkSection.classList.add("drink");
  const drink = data.drinks[0];
  drinkSection.innerHTML = `
      <h2 class='drink-name mb-sm'>${drink.strDrink}</h2>

      <img class="drink-img mb-sm"
        src=${drink.strDrinkThumb}
        alt=${drink.strDrink} cocktail drink
      >
      <p class='txt--italic mb-sm'>${drink.strAlcoholic}</p>
      <section class="drink-ingredients mb-md">
        <p class='mb-xs'>Ingredient 1: ${drink.strIngredient1}</p>
        <p class='mb-xs'>Ingredient 2: ${drink.strIngredient2}</p>
        <p class='mb-xs'>Ingredient 3: ${drink.strIngredient3}</p>
      </section>

      <button class="drink-btn">New Cocktail</button>
  `;

  main.appendChild(drinkSection);
};

getCocktailData();
