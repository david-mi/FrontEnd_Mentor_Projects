let timeoutId = null;
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseover", handleCardMouseHover);
});

/**
 * Prevents button animation from stopping when hovering card
 * @param {MouseEvent} event 
 */

function handleCardMouseHover(event) {
  if (timeoutId !== null) return;

  const targetLinks = event.target.querySelectorAll("a");
  targetLinks.forEach(targetLink => {
    targetLink.style.pointerEvents = "none";
  });

  timeoutId = setTimeout(() => {
    targetLinks.forEach(targetLink => {
      targetLink.style.pointerEvents = "auto";
    });

    timeoutId = null;
  }, 300);
}
