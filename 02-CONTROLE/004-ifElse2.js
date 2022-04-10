Number.prototype.entre = (inicio, fim) => {
    return this >= inicio && this <= fim;
}

imprimeResultado = (nota) => {
    if (nota.entre(9, 10))
    {
        console.log('Quadro de honra!');
    } 
    else if (nota.entre(7, 8.99))
    {
        console.log('Aprovado!');
    }
    else if (nota<7)
    {
        console.log('Que pena, não foi desta vez!!!');
    }
    else
    {
        console.log('Nota inválida!');
    }
    console.log('Fim!!!');
}

const nota1  = (9.1);
imprimeResultado(nota1);

const nota2 = (7.1);
imprimeResultado(nota2);

const nota3 = (6.9)
imprimeResultado(nota3)

const nota4 = (11);
imprimeResultado(nota4);
