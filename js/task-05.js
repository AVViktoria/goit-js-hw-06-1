// Напиши скрипт который, 
// при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее 
// значение в span#name-output.Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".

const refs = {
  inputForm: document.getElementById("name-input"),
  outputForm: document.getElementById("name-output"),
};


refs.inputForm.addEventListener('focus', onInputFormFocus); 
refs.inputForm.addEventListener('input', onInputFormChangeValue); 

function onInputFormFocus () {};

function onInputFormChangeValue(event){
console.log(event.currentTarget.value);
refs.outputForm.textContent = event.currentTarget.value;

if (event.currentTarget.value === ''){
  refs.outputForm.textContent = "Anonymous!"
};
};