function soBoaNota(nota) {
    if (nota >= 7) {
        console.log('Parabéns, você está aprovado!');
    }
}

let nota1 = 6.5;
let nota2 = 9.3;
let nota3 = 7.4;

const calculaNota = (nota1+nota2+nota3)/3;
const resultado = calculaNota;

const nota = calculaNota;

console.log('Sua nota é: '+resultado.toFixed(2));
soBoaNota(nota);