// nesse caso extends é restrição ou constraints
// extends keyof > é no máximo => 'K extends keyof O' = K é no máximo tipo de O
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const ObterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = ObterChave(animal, 'vacinas');
const cor = ObterChave(animal, 'cor');

console.log(vacinas, cor, ObterChave(animal, 'idade'));
