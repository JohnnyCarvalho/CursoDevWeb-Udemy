var a = 3;
let b = 4;
console.log("Valor de a é "+a+", e o valor de b é "+b);
/**
 * Em ambos os casos acima são criados variáveis, porém, é recomendável a utilização da nomenclatura let, por se tratar de uma forma mais utilizada e mais moderna por assim dizer, uma explicação para essa escolha seria o fato de que uma variável declarada como var pode ser sobrescrita podendo traser confusão para o código, já em let essa sobrescrita não é possível diretamente.
 */

const c = 10;
console.log("O valor de c é "+c);
const soma  = a+b+c;
console.log("Resultado da soma entre a + b + c, é "+soma);
/**
 * No caso de constantes "const" é a forma mais recomendável ainda de ser ultilizada, pois nesse caso a constante não podera ser alterada de forma direta e nem indiretamente, recomendável utilizar o let somente em casos em que esse valor for alterado em algum momento no código.
 */
