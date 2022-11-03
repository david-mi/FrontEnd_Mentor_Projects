import { checkIfSomeoneWon } from "./check.js";
import { gameState } from "./gameState.js";
import { defaultBoard } from "./defaultBoard.js";
import { hideWinner } from "./display.js";
import { discsContainers } from "./constants.js";

let board = structuredClone(defaultBoard);


export function resetGame() {
  board = structuredClone(defaultBoard);
  gameState.previousTurn = null;
  discsContainers.forEach(disc => disc.dataset.fill = null);
  hideWinner();
}

export function handleMouseHover({ target }) {
  const position = Number(target.dataset.x);
  const targetedColumnElements = document.querySelectorAll(`[data-x="${position}"][data-fill="null"]`);
  targetedColumnElements[0].classList.add(`preview-${gameState.playerTurn}`);
  targetedColumnElements.forEach(disc => {
    disc.classList.add("hover");
  });
}

export function handleMouseOut({ target }) {
  const position = Number(target.dataset.x);
  const targetedColumnElements = document.querySelectorAll(`[data-x="${position}"]`);
  targetedColumnElements[0].classList.remove(`preview-R`, "preview-Y");
  targetedColumnElements.forEach(disc => {
    disc.classList.remove("hover");
  });
}

export function handleAddDisc({ target }) {
  const xIndex = Number(target.dataset.x);
  for (let y = board.length - 1; y >= 0; y--) {
    if (board[y][xIndex] === "") {
      board[y][xIndex] = gameState.playerTurn;
      const targetedDisc = document.querySelector(`[data-x="${xIndex}"][data-y="${y}"]`);
      targetedDisc.classList.remove("hover");
      targetedDisc.dataset.fill = gameState.playerTurn;
      break;
    }
  }
  handlePlayerTurn();
  const targetedColumnElements = document.querySelectorAll(`[data-x="${xIndex}"]`);
  targetedColumnElements[0].classList.replace(`preview-${gameState.previousTurn}`, `preview-${gameState.playerTurn}`);
  checkIfSomeoneWon(board);
}

function handlePlayerTurn() {
  gameState.previousTurn = gameState.playerTurn;

  if (gameState.playerTurn === "Y") {
    gameState.playerTurn = "R";
  } else {
    gameState.playerTurn = "Y";
  }
}
