function ticketPrice(quantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if(quantity <= 100){
        const price = quantity * first100Rate;
        return price;
    }
    else if(quantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = quantity - 100;
        const restTicketsPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketsPrice;
        return totalPrice; 
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketsQuantity = quantity - 200;
        const restTicketsPrice = restTicketsQuantity * restRate;
        const totalPrice = first100Price + second100Price + restTicketsPrice;
        return totalPrice;
    }

}

const price = ticketPrice(201);
console.log('Ticket Price :', price);
