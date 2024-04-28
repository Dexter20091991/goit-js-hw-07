
const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const header = item.querySelector('h2').textContent;
  const listItems = item.querySelectorAll('ul li');
  console.log(`Category: ${header}`);
  console.log(`Elements in category: ${listItems.length}`);
});
