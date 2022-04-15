function soma() {
    let soma = 0;
        for (i in arguments) {
            soma += arguments[i];
        }
        return soma;
}

console.log(soma);
console.log(soma(10, 20, 30));
console.log(soma(20, 10, 30, ' Executando...'));

// O arguments é um array externo do JS