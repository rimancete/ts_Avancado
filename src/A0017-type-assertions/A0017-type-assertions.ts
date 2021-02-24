/* RECOMENDADO */
// condicional => checando o tipo de variável
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion (as "type")
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// Exemplo: HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* NÃO RECOMENDADO */
// Type assertion (as "type")
const body4 = (document.querySelector('body') as unknown) as number;

// Non-null assertion ("!") => não aconselhável
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
