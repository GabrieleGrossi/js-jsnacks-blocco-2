// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..

const ingredientInput = document.getElementById("ingredient");
const ingredientsList = document.getElementById("ingredients");
const mealDiv = document.getElementById("meal");
const ingredients = [];

function addIngredient() {
  const ingredient = ingredientInput.value;
  if (ingredient !== "") {
    ingredients.push(ingredient);
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientsList.appendChild(listItem);
    ingredientInput.value = "";
  }
}

function generateMeal() {
  mealDiv.innerHTML = "";
  let i = 1;
  ingredients.forEach((ingredient) => {
    setTimeout(() => {
      const image = document.createElement("img");
      image.src = "https://source.unsplash.com/300x300/?food";
      mealDiv.appendChild(image);
    }, i * 2000);
    i++;
  });
}