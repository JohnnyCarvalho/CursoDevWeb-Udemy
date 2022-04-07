var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero); // valor sera 2, pois var é global, ou seja, visível em todo o código.