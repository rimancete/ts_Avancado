interface Humano {
  nome: string;
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
}

interface Humano {
  readonly idade?: number;
}

const humano: Humano = {
  nome: 'Osvaldo',
  sobrenome: 'Costa',
  enderecos: ['Av. Brasil'],
};

console.log(humano);
