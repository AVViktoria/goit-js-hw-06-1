// Используй массив объектов images для создания элементов <img> вложенных в <li>. 
//Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');
Array.prototype.forEach.call(images, function(element) {
  const createListElements = document.createElement('li');
  createListElements.classList.add('list');

  createListElements.insertAdjacentHTML(
  "beforeEnd",
 ` <img src="${element.url}" alt="${element.alt}" class ='img-el'  width = '150px' height = '150px'></img>`
);
 galleryEl.appendChild(createListElements);

  });

 