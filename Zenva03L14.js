let distance = 250;
let fuel = 100;
let distanceCondition = (distance <= 200);
let fuelCondition = ((fuel * 4) >= distance  );
let engineStatus = "working";
let engineFunctioning;

console.log(distance);
console.log(fuel);
console.log(distanceCondition);
console.log(fuelCondition);
console.log(engineStatus);

if(engineStatus == "working") {
    engineFunctioning = true
}
else{
    engineFunctioning = false
}

console.log(engineFunctioning);

if(distance > 200 || !engineFunctioning) {
    console.log("You wont make it.");
}
else if(distanceCondition && fuelCondition) {
    console.log("You will make it");
}