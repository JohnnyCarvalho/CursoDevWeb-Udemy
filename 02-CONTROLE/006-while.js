const getInteiroAleatorioEntre = (min, max) => {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log('Até a próxima!!');

/**
 * @author Johnny Carvalho
 * While é um laço que executa verdadeiro ou falso, ou seja, enquando a expressão da variável for verdadeira ele continua executando até a mesma se tornar 
 * falsa.
 */