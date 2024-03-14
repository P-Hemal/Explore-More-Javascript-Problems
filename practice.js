const bookCart = [
    {name : 'book1', pages : 100, quantity : 1},
    {name : 'book2', pages : 200, quantity : 1},
    {name : 'book3', pages : 300, quantity : 1},
]



function paperRequirements(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        const totalPages = number.pages * number.quantity;
        sum = sum + totalPages;
    }
    return sum;
}

const actualPages = paperRequirements(bookCart);
console.log(actualPages);