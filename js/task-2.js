const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');
const liRefs = ingredients.map(text => {
    const liRef = document.createElement('li');
    liRef.textContent = text;
    return liRef;
});

ulRef.append(...liRefs);