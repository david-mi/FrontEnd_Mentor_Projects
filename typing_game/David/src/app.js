import { getApiSentence } from "./api.js";
const sentenceElement = document.querySelector(".sentence-container");
const inputElement = document.querySelector("input");
const timerElement = document.querySelector(".timer");
const scoreElement = document.querySelector(".score");
const accuracyElement = document.querySelector(".accuracy");

let intervalId = null;
let timer = 30;
let faultCount = 0;
let correctCount = 0;

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
  if (event.key === "Escape" || event.key === "Tab") {
    event.preventDefault();
    clearInterval(intervalId);
    timer = 30;
    timerElement.innerText = timer;
    intervalId = null;
    inputElement.value = "";
    scoreElement.innerText = 0;
    faultCount = 0;
    correctCount = 0;
    accuracyElement.innerText = 100;
    getAndShowSentence();
    inputElement.disabled = false;
  } else if (/^([a-z ,.;:()-_]{1})$|Shift/i.test(event.key) === false) {
    event.preventDefault();
  }
}

inputElement.addEventListener("input", handleTextInput);

function handleTextInput(event) {
  const userInput = event.target.value;

  if (intervalId === null) {
    intervalId = setInterval(() => {
      timer--;
      timerElement.innerText = timer;

      if (timer === 0) {
        inputElement.disabled = true;
        clearInterval(intervalId);
      }
    }, 1000);
  }
  const isCurrentCharValid = compareCurrentChar(userInput);
  handleAccuracy(isCurrentCharValid);
  handleScore(isCurrentCharValid);
  checkIfSentenceFinished(userInput);
}


function handleScore(isValid) {
  const currentScore = Number(scoreElement.innerText);
  if (isValid) {
    scoreElement.innerText = currentScore + 1;
  }
}

function handleAccuracy(isCurrentCharValid) {
  if (isCurrentCharValid === false) {
    faultCount++;
  } else {
    correctCount++;
  }

  const accuracy = 100 * correctCount / (faultCount + correctCount);
  accuracyElement.innerText = accuracy.toFixed(2);
}

function checkIfSentenceFinished(userInput) {
  const apiSentence = sentenceElement.innerText;

  if (apiSentence.length === userInput.length) {
    getAndShowSentence();
    inputElement.value = "";
  }
}

function compareCurrentChar(userInput) {
  const currentApiSentenceIndexElement = document.querySelector(`span[data-index="${userInput.length - 1}"]`);
  const currentApiSentenceLetter = currentApiSentenceIndexElement.innerText;
  const userLastChar = userInput.at(-1);

  if (userLastChar === currentApiSentenceLetter) {
    currentApiSentenceIndexElement.classList.add("right");
    currentApiSentenceIndexElement.classList.remove("wrong");
  } else {
    currentApiSentenceIndexElement.classList.add("wrong");
    currentApiSentenceIndexElement.classList.remove("right");
  }
  return userLastChar === currentApiSentenceLetter;
}

const getAndShowSentence = async () => {
  const sentence = await getApiSentence();
  const toHTML = sentence.replace(/./g, (letter, index) => {
    return `<span data-index=${index}>${letter}</span>`;
  });

  sentenceElement.innerHTML = toHTML;
  inputElement.focus();
};

getAndShowSentence();