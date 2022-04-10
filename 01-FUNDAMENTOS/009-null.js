let valor = null;
console.log(valor)// o valor será null, pois não foi definido um valor para ele

const produto = {}
console.log(produto.preco);// o valor será undefined, pois não foi definido um valor para ele
console.log(produto);// o valor será {}

produto.preco = 3.50;
console.log(produto);// o valor será {preco: 3.5}

produto.preco = undefined;// evitar atribuir undefined, pois a propria linguagem já tribui esse valor quando necessario.

console.log(!!produto.preco);// o valor será false, pois não foi definido um valor para ele



