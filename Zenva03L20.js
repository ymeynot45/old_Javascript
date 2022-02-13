let player = {
    age: 99,
    name: "ABC",
    isActive: true,
    outfit: {
        color: "blue",
        size: "M",
        isNew: true,
        cost: 100,
    },
};

console.log(player.age);
console.log(player["age"]);

player.isActive = false;
console.log(player);

player.health = 100;
console.log(player);

delete player.health;
console.log(player);

console.log(player.outfit.color);

player.outfit.color = "red";
console.log(player.outfit.color);