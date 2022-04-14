let contador = 1;

while (contador <= 10) {
    console.log(`\nContador = ${contador}`);
    contador++; //Acrecenta um número ao contador até que ele se torne false e sai do laço.
}

/**
 * Usando o for, vemos que ele vai executar exatamente oque o 
 * while executou, podemos observar também que, a variáve, a 
 * expressão e o incremento, ou seja :
 * 
 * let contador = 1; variável
 * (contador <= 10) expressão
 * contador++; incremento
 * 
 * todos estes também estão presentes no for, porem de forma 
 * diferente e bem mais simples, vejamos o exemplo:
 */

for (let i = 1; i <= 10; i++) {
    console.log(`\ni = ${i}`);
}

// percorrendo um array simples
const nota = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < nota.length; i++) {
    console.log(`\nNota = ${nota[i]}`);
}