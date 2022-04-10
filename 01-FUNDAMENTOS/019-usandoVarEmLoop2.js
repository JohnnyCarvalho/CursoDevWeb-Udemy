var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();// o valor será 10, pois o índice 2 foi definido como 10