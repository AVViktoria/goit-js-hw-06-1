// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна 
//быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, 
//выводи alert с предупреждением о том, 
//что все поля должны быть заполнены. 


const refs = {
  inputLoginForm: document.querySelector('.login-form'),
  inputFormEmail: document.querySelector('[type="email"]'),
  inputFormPassword: document.querySelector('[type="password"]'),
  inputFormSubmitBtn: document.querySelector('[type="submit"]'),
};

function onFormSubmit(event){
  event.preventDefault();
const formElements = event.currentTarget.elements;
const emailValue = formElements.email.value;
const passwordValue = formElements.password.value;


if(emailValue ==='' || passwordValue==='' ){
  alert("Все поля ввода должны быть заполнены. Исправьте, пожалуйста.")
}

const formData = new FormData(event.currentTarget);
console.log(formData);

formData.forEach((value, name) => {
  console.log("name", name);
  console.log("value", value);
});
//or
// const totalValue ={
//   email: emailValue, password: passwordValue
// }

}

refs.inputLoginForm.addEventListener('submit', onFormSubmit);

