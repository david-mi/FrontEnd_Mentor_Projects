import { handleMouseHover, handleAddDisc, handleMouseOut, resetGame } from "./handlers.js";
import { discsContainers } from "./constants.js";

discsContainers.forEach(disc => {
  disc.addEventListener("mouseover", handleMouseHover);
  disc.addEventListener("mouseout", handleMouseOut);
  disc.addEventListener("click", handleAddDisc);
});

document.addEventListener("keydown", ({ key }) => {
  key === "Escape" && resetGame();
})













