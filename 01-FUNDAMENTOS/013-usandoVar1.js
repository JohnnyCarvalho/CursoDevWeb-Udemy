{
    {
        {
            {
                {
                    var sera = 'Será???'
                    console.log(sera)
                }
            }
        }
    }
}
console.log(sera)// o valor será Será???, pois o var é global, ou seja, visível em todo o código.

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local)// var dentro de uma função é local, ou seja, visível apenas dentro da função.