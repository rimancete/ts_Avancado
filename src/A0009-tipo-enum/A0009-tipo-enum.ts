enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

console.log(Cores.VERMELHO);
console.log(Cores[10]);

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores.ROXO);

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(12345);
