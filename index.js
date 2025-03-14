let valor = Number(prompt ('Digite o valor do produto:'))
console.log(typeof(valor))

if (valor >= 250){
    document.getElementById('Resultado').innerHTML = 'Aprovado'
}

else{
    document.getElementById('Resultado').innerHTML = 'Não aprovado'
}

const market = [
    {id: 1, listMarket: 'Tea'},
    {id: 2, listMarket: 'Pasta'},
    {id: 3, listMarket: 'Rice'},
    {id: 4, listMarket: 'Coffee'}
]
console.log(market.includes({id: 3, listMarket: 'Rice'}))

console.log(market.find(function(market) {
    return market.listMarket == 'Rice'
}))

const tempSp = [19, 20, -25, 29]
const tempPositive = tempSp.filter(value => value >= 0) 
    

console.log(tempPositive)
