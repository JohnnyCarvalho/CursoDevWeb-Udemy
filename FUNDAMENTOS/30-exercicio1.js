const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

mapa = Map(list, (item, index) => {
    console.log(`${index} - ${item}`);
});

console.log(mapa);