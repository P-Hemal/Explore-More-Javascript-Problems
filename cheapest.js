// const phones = [
//     {Brand: 'Iphone', camera: 48, storage: 128, price: 62000, color: "Gray"},
//     {Brand: 'Samsung', camera: 108, storage: 256, price: 88000, color: "Silver"},
//     {Brand: 'Oneplus', camera: 50, storage: 64, price: 41000, color: "Black"},
//     {Brand: 'Pixel', camera: 48, storage: 256, price: 72000, color: "Red"},
//     {Brand: 'Oppo', camera: 32, storage: 128, price: 82000, color: "Blue"}
// ]
// function cheapestPhone(phones){
//     let cheapest = phones[0]
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i]
//         // console.log(phone)
//         if(phone.price < cheapest.price){
//             cheapest = phone
//         }
//     }
//     return cheapest;
// }
// const mySelection = cheapestPhone(phones)
// console.log(mySelection);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 85];
function cheapestNumber(number){
    let cheapest = number[0]
    for(let i = 0; i < number.length; i++){
        const number = numbers[i];
        if(number < cheapest){
            cheapest = number
        }
    }
    return cheapest;
}
const simple = cheapestNumber(numbers);
console.log(simple);
