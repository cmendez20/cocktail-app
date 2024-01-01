const drinkSection = document.querySelector('.drink');
const spinner = document.getElementById('spinner');

async function getCocktailData() {
  drinkSection.innerHTML = '';
  showSpinner();
  try {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.error(error);
  }
  hideSpinner();
}

const renderData = data => {
  const drink = data.drinks[0];
  let drinkIngredients = '';
  const drinkIngredientsArray = Object.keys(drink)
    .filter(key => key.includes('strIngredient'))
    .map(key => {
      if (drink[key]) return drink[key];
    })
    .filter(el => el !== undefined);

  drinkIngredientsArray.forEach((ing, i) => {
    drinkIngredients += `<p><span>Ingredient ${i + 1}</span>: ${ing}\n</p>`;
  });

  window.onload = drinkSection.innerHTML = `
      <h2 class='drink-name'>${drink.strDrink}</h2>

      <img class="drink-img"
        src=${drink.strDrinkThumb}
        alt=${drink.strDrink} cocktail drink
        width='320'
        height='320'
      >
      <p class='txt--italic'>${drink.strAlcoholic}, <span class='drink-category'>${drink.strCategory}</span></p>
      <section class="drink-ingredients">
        ${drinkIngredients}
      </section>

      <button class="drink-btn">New Cocktail</button>
  `;

  document
    .querySelector('.drink-btn')
    .addEventListener('click', getCocktailData);
};

getCocktailData();

function showSpinner() {
  spinner.className = 'show';
  setTimeout(() => {
    spinner.className = spinner.className.replace('show', '');
  }, 5000);
}

function hideSpinner() {
  spinner.classList.add('destroy');
  spinner.className = spinner.className.replace('show', '');
}
