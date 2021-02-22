// Utilize any apenas em último caso
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

export const pessoa = {
  nome: 'Osvaldo',
  sobrenome: 'Costa',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Osvaldo', 'Costa');
pessoa.exibirNome();
