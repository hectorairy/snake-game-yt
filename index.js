import { drawFood, updateFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import {
  SNAKE_SPEED,
  drawSnake,
  snakeHeadPosition,
  snakeIntersection,
  updateSnake,
} from "./snake.js";

const gameBoard = document.querySelector(".snake-game__board");
let gameOver = false;
let game = setInterval(initGame, SNAKE_SPEED);

function initGame() {
  if (gameOver) {
    if (confirm("You lost. Press ok to reset")) {
      clearInterval(game);
      window.location = "/";
    }
    return;
  }
  updateGame();
  drawGame();
}

function updateGame() {
  updateSnake();
  updateFood();
}

function drawGame() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
  checkDeath();
}

function checkDeath() {
  gameOver = outsideGrid(snakeHeadPosition() || snakeIntersection());
}
