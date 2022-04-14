const getInteiroAleatorioEntre = (min, max) => {
    valor = Math.random() * (min, max) + min;
    return Math.floor(valor);
}

opcao = -1;

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`O valor aleatório é ${opcao}`);
} while (opcao != -1)

console.log('Até a próxima!!');

/**
 * @author Johnny Carvalho
 * Essa expressão é bem pouco usada, a principal diferença entre ela e o While tradicional é que, o bloco de código vai ser executado pelo menos uma vez, mesmo o contador já iniciando com a espressão false como no exemplo acima.
 */