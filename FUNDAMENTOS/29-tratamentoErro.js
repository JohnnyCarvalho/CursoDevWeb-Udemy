function tratarErroELancar(erro) {
    throw new error('Não faça isso!');
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('final');
    }
}

const obj = {nome: 'Pedro'}
imprimirNomeGritado(obj)
