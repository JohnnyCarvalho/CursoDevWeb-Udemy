// criar uma função de forma literal
function func1() { }

//Armazenar uma função em uma variável
const func2 = function() {}

//Armazenar uma função em uma array

const array = [function(a, b) {return a + b}]
console.log(array[0](2, 3));

//Armazenar uma função em um objeto
const obj = {}
obj.falar = function() {return 'Hello Word!'}
console.log(obj.falar());

//Passar uma função como parâmetro para outra função
function run(fun) {
    fun()
}
run(function () {console.log('Executando...');})

// mais um exemplo
function soma(a, b) {
    return function (c) {
        console.log(`A soma entre a + b + c é: ${a + b + c}`);
    }
}
soma(2, 2)(2);//Note que é necessário passar o 3º parâmetro seoarado.