/*eslint-disable */
// Tipos básicos(aqui ocorre inferência de tipos)
let nome: string = 'Osvaldo';
let idade: number = 33; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o774
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('Osvaldo');
// let big: bigint = 10n; //bigint

// Array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['a', 'bcd', 'oi'];
let arrayDeStrings2: string[] = ['a', 'bcd', 'oi'];

// Objetos
export let pessoa: {nome: string, idade: number, adulto?: boolean} ={
  nome: 'Osvaldo',
  idade: 123,
};

// Funções
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

