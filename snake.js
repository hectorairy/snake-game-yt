import { getDirection } from "./key-input.js";

export const SNAKE_SPEED = 100;
const snakeBody = [{ x: 10, y: 10 }];
let newSegments = 0;

export function updateSnake() {
  addSegment();

  const direction = getDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += direction.x;
  snakeBody[0].y += direction.y;
}

export function drawSnake(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake() {
  newSegments += 1;
}

export function handleSnakeEats(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPosition(segment, position);
  });
}

function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegment() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}

export function snakeHeadPosition() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return handleSnakeEats(snakeBody[0], { ignoreHead: true });
}
