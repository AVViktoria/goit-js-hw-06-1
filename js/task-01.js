const countListCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${countListCategories.length}`);

countListCategories.forEach(function(element){

    const title = element.firstChild.textContent;
    const itemsLength = element.lastChild.children.length;
    console.log(`Category: ${title} \nElements: ${itemsLength}`);
})

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5