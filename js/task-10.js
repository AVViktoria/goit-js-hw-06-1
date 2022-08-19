// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 
// один параметр - число. Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};  

const refs = {
controlContainer: document.getElementById('controls'),
inputNumberValue: document.querySelector('[type="number"]'),
btnCreate: document.querySelector('[data-create]'),
btnDestroy: document.querySelector('[data-destroy]'),
shapesContainer: document.getElementById('boxes'),
};

refs.btnCreate.addEventListener('click', boxesCollection); 

function boxesCollection() {
const width = 30;
const height = 30;
let addValue = 0;

  let amount = refs.inputNumberValue.value;
  const container = [];

  for(let i = 1; i <= amount; i+=1){
   const shapeElement = document.createElement("div");
   shapeElement.classList.add('shape-element');
   shapeElement.style.background = getRandomHexColor();
   shapeElement.style.width = width + addValue + "px";
   shapeElement.style.height = height + addValue + "px";
   addValue+=10;
   container.push(shapeElement);
};
refs.shapesContainer.append(...container);
};

refs.btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes(){
  while(refs.shapesContainer.firstChild) {
    refs.shapesContainer.removeChild(refs.shapesContainer.firstChild);
 };
};



//I don't understand why '.getContext('2d')' doesn't work?

// const shapeElement = document.createElement('canvas');
// shapeElement.setAttribute('width', "30px");
// shapeElement.setAttribute('height', "30px");
// shapeElement.setAttribute('class', "canvas-shape");
// console.log(shapeElement);

// const sq = document.querySelector('.canvas-shape').getContext('2d');
// sq.fillStyle = 'red';
// sq.rect(30, 30,150,150);
// sq.fill()

// const shapeElement = document.getElementById("canvas");




