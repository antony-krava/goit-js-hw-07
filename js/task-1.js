const categoriesRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');

console.log(`В списке ${itemsRef.length} категории.`);

const getAllSubLists = itemsRef.forEach(title => {
    console.log(`Категория: ${title.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${title.querySelector('ul').children.length}`);
})