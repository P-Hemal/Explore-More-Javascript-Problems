const shoppingCart = [
    {name : 'shoe', price: 4400, quantity: 2},
    {name : 'shirt', price: 3400, quantity: 3},
    {name : 'pant', price: 2400, quantity: 4},
    {name : 'belt', price: 400, quantity: 5},
]

function totalCost(products){
    let sum = 0
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const totalCost = product.price * product.quantity;
        sum = sum + totalCost;
        console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total Products Cost:', expense)