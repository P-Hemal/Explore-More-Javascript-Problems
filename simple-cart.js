const shoppingCart = [
    {name : 'shoe', price: 4400},
    {name : 'shirt', price: 3400},
    {name : 'pant', price: 2400},
    {name : 'belt', price: 400},
]

function totalCost(products){
    let sum = 0
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price
        console.log(product)
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total Products Cost:', expense)