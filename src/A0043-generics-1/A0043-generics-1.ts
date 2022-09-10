type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrFiltradoOriginal = arr.filter((value) => value < 5);
console.log(arrFiltradoOriginal);

const arrFiltrado = meuFilter(arr, (value) => value < 5);
console.log(arrFiltrado);
