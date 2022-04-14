/**
 * @author Johnny Carvalho
 * Nessa estrutura, o for in retorna tanto o valor do array 
 * como seu índice, vejamos o exemploe a seguir
 */

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
    console.log('\nÍndice ' + i + ' = nota: ' + notas[i] + '\n');
}

// Podemos usar também para extrair a estrutura de um objeto, vejamos o exemplo:

const objPessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in objPessoa) {
    console.log(`${atributo} = ${objPessoa[atributo]}`);
}
