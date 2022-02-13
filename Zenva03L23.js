// Challenge

let player = {
    health: 100,
    fun: 0,
    // eatApple: function() {
    //     console.log("eating an apple")
    //     this.health += 10;
    // },
    // eatCandy: function() {
    //     this.health -=5;
    //     this.fun +=5
    // },
    play: function() {
        this.fun += 10
        this.health += 5
    },
    eat: function(food) {
        if (food == "candy") {
            this.health -=5
            this.fun +=5
        }
        else if (food == "apple") {
            console.log("eating an apple")
            this.health += 10;
        };
    },
};

player.eat("candy");
player.play();
console.log(player);
player.eat("apple");
console.log(player);