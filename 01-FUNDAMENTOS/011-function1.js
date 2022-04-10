// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);// o valor será NaN, pois não foi definido um valor para o segundo parâmetro
imprimirSoma(2, 3, 4, 5, 6, 7, 8);// o valor será 5, pois não foi definido um valor para os valores a partir segundo parâmetro, ou seja, o valor será a soma so primeiro parâmetro com o segundo.
imprimirSoma();// o valor será NaN, pois não foi definido nenhum valor para os parâmetros

// Função com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));// o valor será 5, pois o segundo parâmetro foi definido como 0
console.log(soma(2));// o valor será 2, pois o segundo parâmetro foi definido como 0
console.log(soma());// o valor será NaN, pois não foi definido nenhum valor para os parâmetros
