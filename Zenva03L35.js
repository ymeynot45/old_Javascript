let scores = [10, 20, 10];

let i = 0;
while(i < scores.length) {
    scores[i]++;
    i++;
}

console.log(scores);

for(let j = 0; j < scores.length; j++){
    scores[j]++;
}

console.log(scores);

scores.forEach(function(entry, index) {
    // entry++;
    scores[index]++;
    }
);

console.log(scores);


let catalog = [
    {
        title: "JS for Beginners",
        author: "Zenva",
        copies: 1
    },
    {
        title: "HTML for Beginners",
        author: "XYZ",
        copies: 1
    },
    {
        title: "CSS for Beginners",
        author: "Zenva",
        copies: 1
    }
];

catalog.forEach(function(entry){
    if(entry.author == "Zenva") {
        entry.copies++;
    }
});
console.log(catalog);