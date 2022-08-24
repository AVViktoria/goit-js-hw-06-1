// Напиши скрипт, который реагирует на изменение 
// значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя 
// свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.


const refs = {
  inputSizeControl: document.querySelector('#font-size-control'),
  inputTxtValue:  document.querySelector('#text'),
};
refs.inputTxtValue.style.fontSize = refs.inputSizeControl.value + "px" ;

refs.inputSizeControl.addEventListener("input", onChangeTextSize);

function onChangeTextSize(evt) {
  refs.inputTxtValue.style.fontSize = evt.currentTarget.value + "px";
};