import { randomGridPosition } from "./grid.js";
import { increaseScore } from "./score.js";
import { expandSnake, handleSnakeEats } from "./snake.js";

let food = { x: 10, y: 1 };

export function updateFood() {
  if (handleSnakeEats(food)) {
    expandSnake();
    increaseScore();
    food = getRandomPosition();
  }
}

export function drawFood(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || handleSnakeEats(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
