var sillySnake;
var blockSize = 20;
var food;
var count = 0;


function setup() {
    createCanvas(500, 500);
    frameRate(10);

    sillySnake = new Snake();
    food = new Food();
    food.pickLocation();
}

function draw() {
    background('green');
    sillySnake.update();
    sillySnake.show();
    sillySnake.eatFood();
    food.show();
}

function keyPressed() {
    if (keyCode == 40 && sillySnake.ySpeed != -1) {
        sillySnake.movement(0, 1);
    } else if (keyCode == 38 && sillySnake.ySpeed != 1) {
        sillySnake.movement(0, -1);
    } else if (keyCode == 37 && sillySnake.xSpeed != 1) {
        sillySnake.movement(-1, 0);
    } else if (keyCode == 39 && sillySnake.xSpeed != -1) {
        sillySnake.movement(1, 0);
    } 
}