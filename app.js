const drinkSection = document.querySelector(".drink");
const spinner = document.getElementById("spinner");

async function getCocktailData() {
  drinkSection.innerHTML = "";
  showSpinner();
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  hideSpinner();
  renderData(data);
}

const renderData = (data) => {
  console.log(data.drinks[0]);
  const drink = data.drinks[0];

  drinkSection.innerHTML = `
      <h2 class='drink-name mb-sm'>${drink.strDrink}</h2>

      <img class="drink-img mb-sm"
        src=${drink.strDrinkThumb}
        alt=${drink.strDrink} cocktail drink
      >
      <p class='txt--italic mb-sm'>${drink.strAlcoholic}</p>
      <section class="drink-ingredients">
        <p class='mb-xs'><span>Ingredient 1</span>: ${drink.strIngredient1}</p>
        <p class='mb-xs'><span>Ingredient 2</span>: ${drink.strIngredient2}</p>
        <p class='mb-xs'><span>Ingredient 3</span>: ${drink.strIngredient3}</p>
      </section>

      <button class="drink-btn">New Cocktail</button>
  `;

  document
    .querySelector(".drink-btn")
    .addEventListener("click", getCocktailData);
};

getCocktailData();

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}

function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}
