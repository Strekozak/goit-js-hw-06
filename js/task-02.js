const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");


const itemList = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.classList.add("item");
    liEl.textContent = ingredient;
    return liEl;
  });

ulEl.append(...itemList);