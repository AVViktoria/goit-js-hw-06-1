// Напиши скрипт, который при потере фокуса на инпуте 
// (событие blur),
//  проверяет его содержимое на правильное 
// количество введённых символов.

// Сколько символов должно быть в инпуте, 
//указывается в его атрибуте data-length.
// Если введено подходящее количество символов, 
// то border инпута становится зелёным,
//если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

const refs = {
  inputForm: document.getElementById('validation-input'),
};
refs.inputForm.addEventListener('blur', onInputBlur);


function onInputBlur(event){
const inputFormValue = event.currentTarget;
const inputFormValueLength = Number(inputFormValue.dataset.length);

  if (event.currentTarget.value.length === inputFormValueLength){
    inputFormValue.classList.remove('invalid');
 inputFormValue.classList.add('valid');
} else{
  inputFormValue.classList.remove('valid');
  inputFormValue.classList.add('invalid');
};
};

