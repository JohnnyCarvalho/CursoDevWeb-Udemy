const imprimmerResultado = (nota) => {
    switch (Math.floor(nota)) {
        case 9: case 10:
            console.log('Quadro de honra')
            ;
            break;
        case 8: case 7:
            console.log('Aprovado!!');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação!!!');
            break;
        case 3: case 2: case 1:
            console.log('Reprovado!!!');
            break;
        default:
            console.log('Nota inválida!');
            break;
    }
} 

const nota0 = 10;
const nota1 = 8;
const nota2 = 6;
const nota3 = 3;
const nota4 = 0;

imprimmerResultado(nota0);
imprimmerResultado(nota1);
imprimmerResultado(nota2);
imprimmerResultado(nota3);
imprimmerResultado(nota4);
