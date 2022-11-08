
//board
var blockSize = 26;
var row = 30;
var col = 30;
var board;
var context;
// snake head
var snakeX=blockSize * 5;
var snakeY=blockSize * 5;
var velocityX = 0;
var velocityY = 0;
var snakeBody = [];
//food
var foodX; 
var foodY;

var gameOver;
var restart = false;
window.onload = function() {
    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col* blockSize;
    context = board.getContext("2d"); //se usa para dibujar en el board
    console.log("hola mundo");
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function update() {

    if (gameOver){
        return;
    }

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    if ((snakeX == foodX && snakeY == foodY )|| restart == true) {
        snakeBody.push([foodX, foodY])
        placeFood();
        restart=false;
    }

    for (let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }

    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize,blockSize);

    for (let i = 0; i < snakeBody.length; i++ ){
        context.fillRect(snakeBody[i][0],snakeBody[i][1], blockSize, blockSize );
    }

    //game over condition
    
    if(snakeX < 0 || snakeX > col*blockSize || snakeY < 0 || snakeY > row*blockSize){
        gameOver = true;
        alert(" Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody [i][1]){
            gameOver = true;
            alert("Game Over");
        }
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * col) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
        }
}
var small = document.querySelector(".small");
var medium = document.querySelector(".medium");
var large = document.querySelector(".large");

large.addEventListener("click", ()=>{changeLevel("large")}, false );
small.addEventListener("click", ()=>{changeLevel("small")}, false );
medium.addEventListener("click", ()=>{changeLevel("medium")}, false );

function changeLevel(levelSize) {
    if (levelSize == "small"){
        context.fillStyle="white";
        context.fillRect(0, 0, col * blockSize, row * blockSize);
        
        col = 20;
        row = 20;
        
        context.fillStyle="black";
        context.fillRect(0, 0, col * blockSize, row * blockSize);
    
        restart=true;
    }
    else if (levelSize == "medium"){
        context.fillStyle="white";
        context.fillRect(0, 0, col * blockSize, row * blockSize);

        col = 23;
        row = 23;
        
        context.fillStyle="blue";
        context.fillRect(0, 0, col * blockSize, row * blockSize);
    
        restart = true;
    }
    else if (levelSize == "large"){
        context.fillStyle="white";
        context.fillRect(0, 0, col * blockSize, row * blockSize);
        
        col = 30;
        row = 30;
        
        context.fillStyle="brown";
        context.fillRect(0, 0, col * blockSize, row * blockSize);
        
    }

}