// criando tipo mais aberto de number
let x = 10; //eslint-disable-line
x = 0b1010; // bunário é um tipo de número

// const não altera nem tipo nem valor
const y = 10;

// 'as const' define o valor
let a = 100 as const; // eslint-disable-line

// definindo chave 'nome' para não alterar tipo e valor
const pessoa = {
  nome: 'Osvaldo' as const,
  sobrenome: 'Costa',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Azul'));

// Module Mode
export default pessoa;
