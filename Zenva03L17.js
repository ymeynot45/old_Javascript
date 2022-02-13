// 1 hour to min converter
function hourToMinutes(hours) {
    let result = hours * 60;
    return result;
}
let a = hourToMinutes(10);
let b = hourToMinutes(24);

console.log(a);
console.log(b);

let dayToHours = function(days) {
    return days * 24;
};

let c = dayToHours(3);
console.log(c);

// variable declaration
let balance = 100;
let stock = 50;
let price = 5;
let purchaseQuantity = 8;

// 1. check if we have stock
// 2. reduce the quanity of stock, increase balance

function isThereEnought(stock, purchase) {
   return ( stock >= purchase)
}

let d = isThereEnought(stock, purchaseQuantity);
console.log(d);

function profit(price, purchaseQuantity) {
    return price * purchaseQuantity
}

let e = profit(price, purchaseQuantity);
console.log(e);

function stockUpdate(stock, purchaseQuantity) {
    return stock - purchaseQuantity
}

function sale(isThereEnought, profit, balance) {
    if(isThereEnought)
        return profit + balance;
    else return "Insufficent Stock"
}

let isEnoughInStock = isThereEnought(stock, purchaseQuantity)
let g = sale(isInStock)

let g = sale(isThereEnought(stock, purchaseQuantity), profit(price, purchaseQuantity), balance);
console.log(g);


// video answer with non fuctions within this function. But i learned that it could use variable from outside the function inside the function !?
function sellItem(quanity) {
    purchaseQuantity = quanity
}
console.log(sellItem(5));