let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  const direction = e.key;
  const options = {
    ArrowUp: () => {
      if (lastInputDirection.y !== 0) return false;
      inputDirection = { x: 0, y: -1 };
    },

    ArrowDown: () => {
      if (lastInputDirection.y !== 0) return false;
      inputDirection = { x: 0, y: 1 };
    },

    ArrowLeft: () => {
      if (lastInputDirection.x !== 0) return false;
      inputDirection = { x: -1, y: 0 };
    },

    ArrowRight: () => {
      if (lastInputDirection.x !== 0) return false;
      inputDirection = { x: 1, y: 0 };
    },
  };

  if (!options[direction]) return false;

  options[direction]();
});

export function getDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
