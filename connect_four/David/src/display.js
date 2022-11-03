import { winnerContainer } from "./constants.js";

const winnerTitle = winnerContainer.querySelector("h1");
const mainTitleEnum = {
  Y: "Yellow",
  R: "Red"
};

/** Hide winner card and color */

export function hideWinner() {
  winnerContainer.classList.add("hide");
  winnerTitle.innerText = "";
}

/**
 * Display winner card and color
 * 
 * @param {"R" | "Y"} winnerColor 
 */

export function displayWinner(winnerColor) {
  winnerContainer.classList.remove("hide");
  winnerTitle.innerText = `${mainTitleEnum[winnerColor]} has won !`;
}