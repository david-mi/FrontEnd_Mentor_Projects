import "./types.js";
import { fruits } from "./data.js";
import { hideFruitsIcons, showFruitsIcons, setDataValidCards, resetAttributes } from "./attributes.js";
import { getRandomIndex } from "./utils.js";

const countElement = document.querySelector(".count");
const resetButton = document.querySelector("button");
const cards = document.querySelectorAll(".card");
let previousClickedCard = null;

/**
 * Fill a new array with 2 of each {@link Fruit} in random order
 * 
 * @returns {string[Fruit]}
 */

const makeArrayOfFruits = () => {
  const fruitsCopy = [...fruits];
  const randomisedFruits = [];

  for (let i = 0; i < 12; i++) {
    const randomIndex = getRandomIndex(fruitsCopy);
    const removedFruit = fruitsCopy.splice(randomIndex, 1)[0];
    randomisedFruits.push(removedFruit);
  }

  return randomisedFruits;
};

/**
 * - Insert dataset fruit value on each card, based on result of
 * {@link makeArrayOfFruits}
 * 
 * - Insert associated svg background in css
 */

const insertFruitLogosInCards = () => {
  const randomisedFruits = makeArrayOfFruits();

  cards.forEach((card, index) => {
    const currentFruit = randomisedFruits[index];
    card.dataset.fruit = currentFruit;
    card.style.backgroundImage = `url("../icons/${currentFruit}.svg")`;
    card.addEventListener("click", handleCardClick);
  });
};

/**
 * Click event handler on card
 * 
 * @param {Event} event click event on each card
 */

function handleCardClick(event) {
  const clickedCard = event.target;
  if (clickedCard.contains(previousClickedCard) || clickedCard.dataset.valid) return;
  const fruit = clickedCard.dataset.fruit;
  showFruitsIcons(clickedCard);

  if (previousClickedCard !== null) {
    if (previousClickedCard.dataset.fruit === fruit) {
      setDataValidCards(clickedCard, previousClickedCard);
      previousClickedCard = null;
    } else {
      document.addEventListener("click", handleDocumentClick, true);

      setTimeout(() => {
        hideFruitsIcons(clickedCard, previousClickedCard);
        previousClickedCard = null;
        document.removeEventListener("click", handleDocumentClick, true);
      }, 1000);
    }

  } else {
    previousClickedCard = clickedCard;
  }

  incrementClickCount();
}

/**
 * Prevent clicking on anything
 * 
 * @param {Event} event 
 */

function handleDocumentClick(event) {
  event.stopPropagation();
}

/** Increments flips counter by one and show it to the dom */

function incrementClickCount() {
  const clickedNumber = Number(countElement.innerText);
  countElement.innerText = clickedNumber + 1;
}

resetButton.addEventListener("click", () => {
  resetAttributes(cards);
  insertFruitLogosInCards();
  countElement.innerText = 0;
});

insertFruitLogosInCards();