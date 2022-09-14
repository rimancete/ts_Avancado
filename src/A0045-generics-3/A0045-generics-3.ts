interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Osvaldo',
  sobrenome: 'Costa',
  idade: 35,
};
const aluno2: PessoaProtocolo2<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 20,
};
const aluno3: PessoaProtocolo2 = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 18,
};

console.log(aluno1, aluno2, aluno3);
