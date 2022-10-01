// Type Predicate (Predicado de tipos) =>
// quando o retorno for true, valor tem  o tipo z (ps: value is number)
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

// console.log(isNumber('123'));
// console.log(isNumber(123));

export function soma<T>(...arg: T[]): number {
  const retorno = arg.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]));
console.log(soma('a', 'b', 'c'));
