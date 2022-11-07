
import { update as update } from './controllers/game';
window.onload = function() {
    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col* blockSize;
    context = board.getContext("2d"); //se usa para dibujar en el board
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

