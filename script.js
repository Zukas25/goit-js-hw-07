// Task 2: JavaScript
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  
  // Pobierz referencję do listy ul#ingredients
  const ingredientsList = document.getElementById('ingredients');
  
  // Utwórz DocumentFragment
  const fragment = document.createDocumentFragment();
  
  // Dodaj do fragmentu elementy li
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    fragment.appendChild(li);
  });
  
  // Dodaj fragment do listy ul#ingredients w jednej operacji
  ingredientsList.appendChild(fragment);
  