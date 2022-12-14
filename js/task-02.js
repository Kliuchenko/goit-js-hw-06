const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
// console.log(ingredientsList);

for (const item of ingredients) {
  const items = document.createElement('li')
  items.classList = 'item';
  items.textContent = item;
  ingredientsList.append(items);
  // console.log(items);
}
