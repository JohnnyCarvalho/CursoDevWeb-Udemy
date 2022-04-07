let isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); // nesse caso o valor inverte seu estado atual, ou seja, se for true, o valor será false e vice versa
console.log(!!isAtivo); // nesse caso o valor não é alterado, ou seja, o valor permanece o mesmo

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar...');
console.log(!!('' || null || 0 || ' '));// ou seja, se algum dos valores for verdadeiro, o valor será true, caso contrário será false
console.log(!('' || null || 0 || ' '));// ou seja, se algum dos valores for falso, o valor será false, caso contrário será true

let nome = 'Lucas';
console.log(nome || 'Desconhecido');// ou seja, se o valor for verdadeiro, o valor será o mesmo, caso contrário será o valor 'Desconhecido'

nome = '';
console.log(nome || 'Desconhecido');// ou seja, se o valor for falso, o valor será o mesmo, caso contrário será o valor 'Desconhecido'

