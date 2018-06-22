
let score = 0;//how many time the player make it to the water
const resultCard = document.querySelector('#result') //the winning card

//the function which contains everything that happend each time the player make it to the water
const water = function(){
    score = score + 1; //the score +1 every time
    enemyPlus(); //adds more enemies 
    document.getElementById("score").innerHTML = "Score: "+score; //update the score
} 

// The generator of the Enemies our player must avoid
const Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png'; //the image
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed*dt;
    if (this.x > 500) {
        this.x = 0;
    }
    this.collition(); //in every update 
};

// The defaults of when a collition happen and what happens then
Enemy.prototype.collition = function(){
    if (player.y + 131 >= this.y + 90 &&
        player.y + 73 <= this.y + 135 &&
        player.x + 25 <= this.x + 88 &&
        player.x + 76 >= this.x + 11){
        score = 0; //score turns 0
        start(); // the game starts all over again
        document.getElementById("score").innerHTML = "Score: "+score; //display the new score

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//The generator of the player
const Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);   
};

//manage the new position of the player when we navigate him with the arrows
Player.prototype.handleInput = function(key){
    if (key === 'left') {
        if (this.x > 0){
            this.x = this.x - 50;
        }
        else{
            this.x = 0;
        }
    }
    if (key === 'right') {
        if (this.x < 400){
            this.x = this.x + 50;
        }
        else{
            this.x = 400;
        }
    }
    if (key === 'up') {
        if (this.y > 50){
            this.y = this.y - 50;
        }
        else{
            water();
            this.y = 400;
            this.x = 200;
        }
    }
    if (key === 'down') {
        if (this.y < 400){
            this.y = this.y + 50;
        }
        else{
            this.y = 400;
        }
    }
    
}

//the function that increase the enemies depence of the score.
const enemyPlus = function(){
    if (score === 1) {
        allEnemies.push(new Enemy(0,200,200));
    }
    if (score === 2) {
        allEnemies.push(new Enemy(0,150,150));
        setTimeout(function(){
        allEnemies.push(new Enemy(0,100,100))
    },1000);
    }
    if (score === 3) {
        allEnemies.push(new Enemy(0,50,200));
    }
    if (score === 4) {
        allEnemies.push(new Enemy(0,150,250));
    }
    if (score === 5) { //the final level creates a winning window.
        const textToAdd = '<h1>You win!!!</h1><p>Congratulations you pass all the levels! </p><a class="play" href="index.html">Play Again!</a>'
        resultCard.insertAdjacentHTML('afterbegin',textToAdd);
        resultCard.style.cssText = 'display:flex;'
    }
    
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//what happent ehen the game starts
const start = function(){
    allEnemies = [];// the enemies are 0
    player = new Player(200,400); //a new player is created
    setTimeout(function(){//we add 2 enemies
        allEnemies.push(new Enemy(0,50,100))
    },1000);
    allEnemies.push(new Enemy(0,200,100));

}


//when the game starts when we open the index.html
let allEnemies = [];
let player = new Player(200,400);
start();


