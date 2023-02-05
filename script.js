let cards = document.getElementById("cards");

const createCard = function (dish, ingredients, instructions) {
  let newCard = document.createElement("div");

  let recipeTitle = document.createElement("h3");
  recipeTitle.textContent = dish;
  newCard.append(recipeTitle);

  let ingredientList = document.createElement("ul");
  for (let ingredient of ingredients) {
    let newIngredient = document.createElement("li");
    newIngredient.textContent = ingredient;
    ingredientList.append(newIngredient);
  }
  newCard.append(ingredientList);

  let instructionList = document.createElement("ol");
  for (let step of instructions) {
    let newStep = document.createElement("li");
    newStep.textContent = step;
    instructionList.append(newStep);
  }
  newCard.append(instructionList);

  cards.append(newCard);
};

createCard(
  "Lasagna",
  ["noodles", "sauce", "cheese", "sausage"],
  ["Cook the noodles", "Layer everything", "Bake that sucker"]
);
