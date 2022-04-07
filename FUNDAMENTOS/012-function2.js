// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);// Nesse exemplo estamos armazenando uma função em uma variável, e a função não tem nenhum retorno, então o valor será 5.

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

soma(2, 3);// Nesse exemplo estamos armazenando uma função arrow em uma variável, e a função arrow tem um retorno, então o valor será 5.

const subtracao = (a, b) => a - b;

subtracao(2, 3);// Nesse exemplo estamos armazenando uma função arrow em uma variável, e a função arrow não tem um retorno, então o valor será -1.