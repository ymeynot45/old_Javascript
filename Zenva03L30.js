let population = 100;
let increase = 1.05;
let year = 1990;

// while(year < 2000) {
//     population *= increase;
//     year++;
//     console.log(year + " - " + population);
// }

for(let i = 0; i < 10; i++) {
    population *= 1.05;
}

console.log(population)