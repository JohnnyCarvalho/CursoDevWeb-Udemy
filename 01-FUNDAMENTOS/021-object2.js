console.log(typeof Object);// o valor será uma função, pois o objeto é do tipo function em Java Script.
console.log(typeof new Object());// o valor será um objeto, pois foi gerado um novo objeto a partir da função Object, é meio confuso, mais é isso aí mesmo.

const Cliente = function () {}
console.log(typeof Cliente);
console.log(typeof new Cliente());// o valor será um objeto, pois foi gerado um novo objeto a partir da função Cliente, é meio confuso, mais é isso aí mesmo.

class Produto {}
console.log(typeof Produto);// o valor será uma função, pois a classe é do tipo function em Java Script.
console.log(typeof new Produto());// o valor será um objeto, pois foi gerado um novo objeto a partir da classe Produto, é meio confuso, mais é isso aí mesmo.