import { displayWinner } from "./display.js";

/**
 * Check if a player has won. If yes, display it
 * 
 * @param {Board} board 
 */

export function checkIfSomeoneWon(board) {
  const winner = (
    checkHorizontal(board) ||
    checkVertical(board) ||
    checkLeftDiagonal(board) ||
    checkRightDiagonal(board)
  );

  if (winner !== null) {
    displayWinner(winner);
  }
}

/** 
* Check horizontal values in {@link board} 
*
* @param {Board} board 
*/

function checkHorizontal(board) {
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 4; x++) {
      const current = board[y][x];
      if (
        current !== "" &&
        current === board[y][x + 1] &&
        current === board[y][x + 2] &&
        current === board[y][x + 3]
      ) {
        return current;
      }
    }
  }
  return null;
}

/** 
* Check vertical values in {@link board} 
*
* @param {Board} board 
*/

function checkVertical(board) {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 7; x++) {
      const current = board[y][x];
      if (
        current !== "" &&
        current === board[y + 1][x] &&
        current === board[y + 2][x] &&
        current === board[y + 3][x]
      ) {
        return current;
      }
    }
  }
  return null;
}

/** 
* Check left diagonal values in {@link board} 
*
* @param {Board} board 
*/

function checkLeftDiagonal(board) {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 4; x++) {
      const current = board[y][x];
      if (
        current !== "" &&
        current === board[y + 1][x + 1] &&
        current === board[y + 2][x + 2] &&
        current === board[y + 3][x + 3]
      ) {
        return current;
      }
    }
  }
  return null;
}

/** 
* Check right diagonal values in {@link board} 
*
* @param {Board} board 
*/

function checkRightDiagonal(board) {
  for (let y = 5; y > 2; y--) {
    for (let x = 0; x < 4; x++) {
      const current = board[y][x];
      if (
        current !== "" &&
        current === board[y - 1][x + 1] &&
        current === board[y - 2][x + 2] &&
        current === board[y - 3][x + 3]
      ) {
        return current;
      }
    }
  }
  return null;
}