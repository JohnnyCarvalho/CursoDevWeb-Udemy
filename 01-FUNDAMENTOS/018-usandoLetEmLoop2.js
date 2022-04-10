let funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();
// o valor sera 2 e 8, pois o índice 2 foi definido como 2 e o índice 8 foi definido como 8, e o let só é visível dentro do bloco.