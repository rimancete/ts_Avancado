import isEmail from 'validator/lib/isEmail';
const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  hideErrorMessages();
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualsPasswords(password, password2);

  if (isSendingForm()) console.log('Form sent');
});

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo deve ser preenchido');
  });
};

const checkEmail = (email: HTMLInputElement): void => {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email inválido');
};

const checkEqualsPasswords = (
  password: HTMLInputElement,
  password2: HTMLInputElement,
) => {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas diferentes');
    showErrorMessage(password2, 'Senhas diferentes');
  }
};
const hideErrorMessages = (): void => {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
};
const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
};

const isSendingForm = (): boolean => {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));

  return send;
};
