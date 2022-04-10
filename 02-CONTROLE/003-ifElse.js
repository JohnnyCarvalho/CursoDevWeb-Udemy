/**
 * @author Johnny Carvalho
 */

function soBoaNota(nota) {
    if (nota >= 7) {
        console.log('Parabéns, você está aprovado!');
    }
    else {
        console.log('Que pena, não foi desta vez!');
    }
}

// **** APROVADO ***
let nota1 = 6.5;
let nota2 = 9.3;
let nota3 = 7.4;

const calculaNota = (nota1+nota2+nota3)/3;
const resultado = calculaNota;

const nota = calculaNota;

console.log('Sua nota é: '+resultado.toFixed(2));
soBoaNota(nota);

//////////////////////////////////////

// *** REPROVADO ***
let nota4 = 4.2;
let nota5 = 3.1;
let nota6 = 2.0;

const calculaNotaNova = (nota4+nota5+nota6)/3;
const resultado2 = calculaNotaNova;

const notaNova = resultado2;

console.log('Sua nota é: '+resultado2.toFixed(2));
soBoaNota(notaNova);
