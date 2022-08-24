export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(newCpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = newCpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Osvaldo', 'Costa', 35, '123.456.789-01');

pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
