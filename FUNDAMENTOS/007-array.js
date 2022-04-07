const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores);
console.log(valores[0], valores[3]);
console.log(valores[4]);// nesse caso o valor será undefined, pois não existe um índice 4

valores[4] = 10;
console.log(valores);
console.log(valores.length);// o valor será 5, pois o índice 4 foi criado

valores.push({id: 3}, false, null, 'teste');// push adiciona um novo valor no array
console.log(valores);

console.log(valores.pop());// pop remove o último valor do array
console.log(valores);

delete valores[0];// delete remove o valor do índice 0
console.log(valores);

console.log(typeof valores);// o valor será object, pois o array é do tipo object