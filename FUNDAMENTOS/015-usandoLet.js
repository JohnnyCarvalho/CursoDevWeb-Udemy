var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero) // o valor sera diferente, pois let é local, ou seja, visível apenas dentro do bloco, e var é global, ou seja, visível em todo o código.

var numero1 = 1;
{
    let numero2 = 2;
    console.log('dentro = ', numero2);
}
console.log(numero1 + numero2); // nesse caso vai gerar um erro, pois o numero2(let) não é visível fora do bloco.

