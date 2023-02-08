let recipes = [
  {
    title: "Lasagna",
    ingredients: ["noodles", "sauce", "cheese", "sausage"],
    instructions: ["Cook the noodles", "Layer everything", "Bake that sucker"],
  },
  {
    title: "Carbonara",
    ingredients: ["noodles", "egg yolks", "bacon", "parmesan cheese"],
    instructions: [
      "Cook the noodles and the bacon",
      "Mix the yolks and the parmesan",
      "Stir all ingredients together",
    ],
  },
];

let cards = document.getElementById("cards");

const createCards = function (recipes) {
  for (let recipe of recipes) {
    let newCard = document.createElement("div");

    let recipeTitle = document.createElement("h3");
    recipeTitle.textContent = recipe.title;
    newCard.append(recipeTitle);

    let ingredientList = document.createElement("ul");
    for (let ingredient of recipe.ingredients) {
      let newIngredient = document.createElement("li");
      newIngredient.textContent = ingredient;
      ingredientList.append(newIngredient);
    }
    newCard.append(ingredientList);

    let instructionList = document.createElement("ol");
    for (let step of recipe.instructions) {
      let newStep = document.createElement("li");
      newStep.textContent = step;
      instructionList.append(newStep);
    }
    newCard.append(instructionList);

    newCard.classList.add("card");

    cards.append(newCard);
  }
};

createCards(recipes);

// const createCard = function (dish, ingredients, instructions) {
//   let newCard = document.createElement("div");

//   let recipeTitle = document.createElement("h3");
//   recipeTitle.textContent = dish;
//   newCard.append(recipeTitle);

//   let ingredientList = document.createElement("ul");
//   for (let ingredient of ingredients) {
//     let newIngredient = document.createElement("li");
//     newIngredient.textContent = ingredient;
//     ingredientList.append(newIngredient);
//   }
//   newCard.append(ingredientList);

//   let instructionList = document.createElement("ol");
//   for (let step of instructions) {
//     let newStep = document.createElement("li");
//     newStep.textContent = step;
//     instructionList.append(newStep);
//   }
//   newCard.append(instructionList);

//   newCard.classList.add("card");

//   cards.append(newCard);
// };

// for (let recipe of recipes) {
//   createCard(recipe.title, recipe.ingredients, recipe.instructions);
// }
