// HTML Elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const rankingPopup = document.getElementById('ranking'); 
const closeRanking = document.getElementById('closeRanking')
const slowButton = document.getElementById('slow');
const mediumButton = document.getElementById('medium');
const fastButton = document.getElementById('fast');
const leaderboardButton = document.getElementById('leaderboard');
const gameOverSign = document.getElementById('gameOver');
const firstInfo = document.getElementById('firstInfo');


// Game settings
const boardSize = 10;
var gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};

// Game variables
let snake;
let score;
let highscore;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const drawSnake = () => {
    snake.forEach( square => drawSquare(square, 'snakeSquare'));
}

// Rellena cada cuadrado del tablero
// @params 
// square: posicion del cuadrado,
// type: tipo de cuadrado (emptySquare, snakeSquare, foodSquare)
const drawSquare = (square, type) => {
    const [ row, column ] = square.split('');
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);
    squareElement.setAttribute('class', `square ${type}`);

    if(type === 'emptySquare') {
        emptySquares.push(square);
    } else {
        if(emptySquares.indexOf(square) !== -1) {
            emptySquares.splice(emptySquares.indexOf(square), 1);
        }
    }
}

const moveSnake = () => {
    const newSquare = String(
        Number(snake[snake.length - 1]) + directions[direction])
        .padStart(2, '0');
    const [row, column] = newSquare.split('');


    if( newSquare < 0 || 
        newSquare > boardSize * boardSize  ||
        (direction === 'ArrowRight' && column == 0) ||
        (direction === 'ArrowLeft' && column == 9 ||
        boardSquares[row][column] === squareTypes.snakeSquare) ) {
        gameOver();
    } else {
        snake.push(newSquare);
        if(boardSquares[row][column] === squareTypes.foodSquare) {
            addFood();
        } else {
            const emptySquare = snake.shift();
            drawSquare(emptySquare, 'emptySquare');
        }
        drawSnake();
    }
}

const addFood = () => {
    score++;
    updateScore();
    createRandomFood();
}

const gameOver = () => {
    gameOverSign.style.display = 'block';
    clearInterval(moveInterval)
    slowButton.disabled = false;
    mediumButton.disabled = false;
    fastButton.disabled = false;
}

const setDirection = newDirection => {
    direction = newDirection;
}

const directionEvent = key => {
    switch (key.code) {
        case 'ArrowUp':
            direction != 'ArrowDown' && setDirection(key.code)
            break;
        case 'ArrowDown':
            direction != 'ArrowUp' && setDirection(key.code)
            break;
        case 'ArrowLeft':
            direction != 'ArrowRight' && setDirection(key.code)
            break;
        case 'ArrowRight':
            direction != 'ArrowLeft' && setDirection(key.code)
            break;
    }
}

const createRandomFood = () => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    drawSquare(randomEmptySquare, 'foodSquare');
}

const updateScore = () => {
    scoreBoard.innerText = score;
}

const createBoard = () => {
    boardSquares.forEach( (row, rowIndex) => {
        row.forEach( (column, columnndex) => {
            const squareValue = `${rowIndex}${columnndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class', 'square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        })
    })
}

const setGame = (levelSpeed) => {
    snake = ['00', '01', '02', '03'];
    score = 0;
    direction = 'ArrowRight';
    if(levelSpeed == "slow"){
        gameSpeed = 200;
    }
    else if(levelSpeed == "medium"){
        gameSpeed = 150;
    }
    else if(levelSpeed == "fast"){
        gameSpeed = 100;
    }
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquares);
    board.innerHTML = '';
    emptySquares = [];
    createBoard();
}

const startGame = (levelSpeed) => {
    setGame(levelSpeed);
    gameOverSign.style.display = 'none';
    slowButton.disabled = false;
    mediumButton.disabled = false;
    fastButton.disabled = false;
    drawSnake();
    updateScore();
    createRandomFood();
    document.addEventListener('keydown', directionEvent);
    moveInterval = setInterval( () => moveSnake(), gameSpeed);
}

leaderboardButton.addEventListener('click', () => {
    rankingPopup.showModal();
    fetch('http://localhost:5000/users')
        .then(res => res.ok ? Promise.resolve(res): Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('firstInfo')
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.email} - ${userInfo.highscore}`
                list.appendChild(listItem)
                }
            })
        .catch(err=> console.log('Solicitud fallida', err));
        rankingPopup.shoe
    }
    
)

closeRanking.addEventListener('click', () => {
        rankingPopup.close();
        firstInfo.innerHTML = '';
    }
)

slowButton.addEventListener('click', ()=>{startGame("slow")});
mediumButton.addEventListener('click', ()=>{startGame("medium")});
fastButton.addEventListener('click', ()=>{startGame("fast")});