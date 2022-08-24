export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = []; // pode ser acessado na classe e subclasses
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class ODC extends Empresa {
  constructor() {
    super('ODC Ltda.', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    private readonly nome: string,
    private readonly sobrenome: string,
  ) {}
}

const empresa1 = new ODC();
console.log(empresa1);

const colaborador1 = new Colaborador('Osvaldo', 'Costa');
const colaborador2 = new Colaborador('José', 'Silva');
const colaborador3 = new Colaborador('Maria', 'Jesus');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
empresa1.mostrarColaboradores();
