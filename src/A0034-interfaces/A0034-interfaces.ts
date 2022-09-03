interface NameType {
  nome: string;
}

interface LastNameType {
  sobrenome: string;
}

interface FullNameType {
  nomeCompleto(): string;
}

type PersonType = NameType & LastNameType & FullNameType;
interface PersonType2 extends NameType, LastNameType, FullNameType {}

class Person implements PersonType {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const person = new Person('Osvaldo', 'Costa');
console.log(person.nomeCompleto());

const person2: PersonType2 = {
  nome: 'Osvaldo',
  sobrenome: 'Domingos',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

console.log(person2.nomeCompleto());
