const countListCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${countListCategories.length}`);

Array.prototype.forEach.call(countListCategories, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} \nElements: ${itemsLength}`);
});



// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5