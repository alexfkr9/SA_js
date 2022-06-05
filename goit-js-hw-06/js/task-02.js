const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map( ingredient => {
  const ingredientEl = document.createElement('li');  
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  return  ingredientEl; 
} )

const ingredientsListEl = document.querySelector('ul#ingredients');

ingredientsListEl.append(...ingredientsEl);