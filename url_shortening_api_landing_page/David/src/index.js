import "./attributes.js";
import { getShortenedUrl } from "./utils/api.js";

const textInput = document.getElementById("text");
const form = document.querySelector("form");
const linksElementContainer = document.querySelector(".links");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = textInput.value;
  getShortenedUrl(inputValue)
    .then(apiData => {
      const linkElement = createLinkElement(apiData);
      linksElementContainer.prepend(linkElement);
      form.reset();
    })
    .catch(error => {
      console.error(error);
    });
}

function copyLinkToClipBoard(event, shortenedUrl) {
  const copyButtons = document.querySelectorAll(".link button");

  for (const button of copyButtons) {
    if (button.classList.contains("copied") === true) {
      button.classList.remove("copied");
      break;
    };
  }

  const clickedButton = event.target;
  clickedButton.innerText = "Copied!";
  clickedButton.classList.add("copied");
  navigator.clipboard.writeText(shortenedUrl);
}

function createLinkElement(apiData) {
  const shortenedLink = apiData.result.short_link;
  const originalLink = apiData.result.original_link;

  const linkContainer = document.createElement("div");
  linkContainer.classList.add("link");

  const originalLinkElement = document.createElement("p");
  originalLinkElement.innerText = originalLink;

  const shortenedLinkElement = document.createElement("a");
  shortenedLinkElement.href = shortenedLink;
  shortenedLinkElement.innerText = shortenedLink;

  const copyLinkButton = document.createElement("button");
  copyLinkButton.addEventListener("click", (event) => {
    copyLinkToClipBoard(event, shortenedLink);
  });
  copyLinkButton.innerText = "Copy";

  linkContainer.append(originalLinkElement, shortenedLinkElement, copyLinkButton);

  return linkContainer;
}

