const categoriesList = document.querySelector('#categories');
// console.log(categoriesList);
const itemsEl = categoriesList.children;
console.log('Number of categories: ', itemsEl.length);
const itemsElArray = [...itemsEl];

for (const item of itemsElArray) {
    const itemHeader = item.querySelector('h2').textContent;
    const itemsNumber = item.querySelectorAll('li').length;

    console.log(`Category: ${itemHeader}`);
    console.log(`Elements: ${itemsNumber}`);
}