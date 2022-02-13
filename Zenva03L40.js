// 1. select
let sign = document.getElementById("sign");
console.log(sign);

// 2. Modify
console.log(sign.textContent);
// Undefined --> console.log(sign.content)
sign.textContent = "Welcome, Traders!";

// 3. Modify HTML
//sign.innerHTML = sign.innerHTML + '<P>hello</p>';

sign.style.color = "blue";  