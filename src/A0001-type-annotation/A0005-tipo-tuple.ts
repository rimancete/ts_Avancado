// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Osvaldo'];
const dadosCliente2: [number, string, string] = [1, 'Osvaldo', 'Costa'];
const dadosCliente3: [number, string, string?] = [1, 'Osvaldo'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Osvaldo',
  'Costa',
  'Masculino',
];
// dadosCliente1[0] = 10;
// dadosCliente1[1] = 'João';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// readonly Array
const array: readonly string[] = ['Osvaldo', 'Costa', 'Masculino'];
const array2: ReadonlyArray<string> = ['Osvaldo', 'Costa', 'Masculino'];

console.log(array);
console.log(array2);
