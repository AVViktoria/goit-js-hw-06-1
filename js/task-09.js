// Напиши скрипт, который изменяет цвета фона
// элемента <body> через инлайн стиль при клике 
//на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
  bcgColor: document.querySelector('.widget'),
  nameColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'), 
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
    refs.btnChangeColor.addEventListener('click', () => {
      document.body.style.background = getRandomHexColor();
      refs.nameColor.textContent = getRandomHexColor();
      document.body.setAttribute(
        'style',
        'background-color: ' + refs.nameColor.textContent
      );
    });

  