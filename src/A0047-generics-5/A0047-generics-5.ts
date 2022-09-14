/*
quando os valores de uma classe for criado depois,
o ts não consegue inferir o tipo ao instanciar
*/
export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}
// inferir tipo (maioria dos casos)
// const pessoa1 = new Pessoa('Osvaldo', 30);
// const pessoa2 = new Pessoa(['Osvaldo'], 30);
// const pessoa3 = new Pessoa(['Osvaldo'], { idade: 30 });
// const pessoa4 = new Pessoa<string, number>('Osvaldo', 30);

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  length(): number {
    return this.contador;
  }

  show(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

// para inferir tipos, necessário informar o tipo
const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('A');
pilha.show();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
