function sendSignal() {
    console.log("Help!");
}

let ping = 0

while(ping < 1000) {
    sendSignal();
    ping++;
}


//Adding the numbers 0-9
let start = 0;
let j = 0;

while(j < 10) {
    start += j;
    console.log(start);
    j++;
}