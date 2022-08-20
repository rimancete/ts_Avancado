export function funcao(this: Date, arg1: string): void {
  console.log(this);
  console.log(arg1);
}

funcao.call(new Date(), 'Olá');
funcao.apply(new Date(), ['Olá']);
