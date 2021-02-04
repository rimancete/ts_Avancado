const objetoA: {
  // definindo como somente leitura
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  // informando que poderá ter mais chaves => index signature
  [key: string]: unknown;
} = {
  chaveA: 'A',
  chaveB: 'B',
};
// objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova Chave';
objetoA.chaveB = 'Outra chave';
objetoA.chaveD = 2;

console.log(objetoA);
