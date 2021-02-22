type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD; // Intersection => valor 'A' se repete nos tipoes AB, AC e AD

// Module Mode
export const pessoa: Pessoa = {
  idade: 33,
  nome: 'Osvaldo',
  sobrenome: 'Costa',
};
