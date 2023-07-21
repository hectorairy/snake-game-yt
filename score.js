let score = 0;

export function increaseScore() {
  const scoreSelector = document.querySelector(".score");
  score += 1;
  scoreSelector.innerHTML = score;
}
