const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;// Destruturação de objetos, ou seja pega os valores de dentro do objeto e coloca dentro de variáveis.
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;// Destruturação de objetos, ou seja pega os valores de dentro do objeto e coloca dentro de variáveis.
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;// nesse caso o valor default é true, pois o valor não foi informado.
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);