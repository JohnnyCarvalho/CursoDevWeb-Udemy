const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1+' e '+peso2);

/**
 * Em peso1 e peso2 ambos foram declarados com pontos flutuantes, porém, como em ambos o resto da divisão por 2 é 0, o JS entende que se trata de um número inteiro, utilizando a função Number.isInteger() podemos afirmar se um número é inteiro ou não, ele vai imprimir true ou false no console, vejamos os exemplos a seguir
 */
 console.log(Number.isInteger(peso1));
 console.log(Number.isInteger(peso2));

 /**
  * Agora vamos colocar qualquer número na frente da casa decimal e ver oque acontece
  */

 const peso3 = 1.1;
 const peso4 = Number('2.1');
 console.log(peso3+' e '+peso4);
 console.log(Number.isInteger(peso3));
 console.log(Number.isInteger(peso4));

 /**
  * Existem algumas funões interessantes em JS para se trabalhar com Number, vamos ver uns exemplos a seguir
  */

 const nota1 = 6.4;
 const note2 = 8.5;

 const total = nota1*peso1 + note2*peso2;
 const media = total/(peso1+peso2);

 console.log('A média final é: '+media);

 // Se quisermos aumentar as casas decimais devemos incluir uma função chamado ToFixed()

 console.log('A média final é: '+media.toFixed(2));

 // E se quisermos extrair o valor binário desse resultado incluimos a função toString()

 console.log('A média final em binário é: '+media.toString(2));// NOTA: essa função so funciona em números