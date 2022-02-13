let item = "engine";

// checking inequality
if(item != "engine") {
    console.log("not an engine!");
}

let score = 5;

if(score >= 60) {
    console.log("pass");
}
else if(score < 10) {
    console.log("meet the teacher");
}
else {
    console.log("fail");
}

// store comparison result in a variable
let isEngine = item == "engine";
console.log(isEngine);

if(isEngine) {
    console.log("item is engine");
}

//Challenge
// 1. Check balance
// 2. if they buy the item, update the balance

let balance = 100;
let itemPrice = 130;

if(balance >= itemPrice) {
    balance -= itemPrice;
    console.log("Item Purchased")
    console.log(balance)
}
else{
    console.log("Insufficent Funds");
    console.log("You are " + (itemPrice - balance) + " short!");
    console.log(balance);
}