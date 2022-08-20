import funcao from './mod';
// funcao();
const maca_kg = 4;
const morango_kg = 6;

function total(maca_kg: number, morango_kg: number) {
  let valor_maca = 0;
  let valor_morango = 0;

  if (maca_kg <= 5) valor_maca = maca_kg * 2.5;
  if (maca_kg > 5) valor_maca = maca_kg * 2.2;
  if (maca_kg <= 0)
    console.log(`Quantidade de kilos de morango informada é inválida`);

  if (morango_kg <= 5) valor_morango = morango_kg * 1.8;
  if (morango_kg > 5) valor_morango = morango_kg * 1.5;
  if (morango_kg <= 0)
    console.log(`Quantidade de kilos de morango informada é inválida`);

  return `Valor total da compra é R$ ${valor_maca + valor_morango}`;
}

console.log(total(maca_kg, morango_kg));
