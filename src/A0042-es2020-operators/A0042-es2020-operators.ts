// Encadeamento opcional e Operador de coalescência nula(undefined ou null)

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'Esse é o texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1-ixi, não existe data');
console.log(undefined ?? '2-ixi, não existe data');
console.log(null ?? '3-ixi, não existe data');
console.log(false ?? '4-ixi, não existe data');
console.log(0 ?? '5-ixi, não existe data');
console.log('-' ?? '6-ixi, não existe data');
