import { pause } from "./icons/pause.js"
const main = document.getElementById("main")

let timeoutId = null

const handleButtonClickDelay = (delay) => {
  if (timeoutId !== null) {
    toggleButton("disable")
    return "delay"
  }

  timeoutId = setTimeout(() => {
    timeoutId = null
    toggleButton("enable")
  }, delay)
}

const toggleButton = (state) => {
  const buttonElement = document.querySelector("button")

  const isButtonDisabled = state === "enable"
    ? false
    : true
  buttonElement.disabled = isButtonDisabled
}

const handleButtonClick = (adviceElement, idElement) => {
  if (handleButtonClickDelay(2000) === "delay") return

  getApiData()
    .then(data => {
      const id = data.slip.id
      const advice = data.slip.advice
      adviceElement.innerText = `“${advice}”`
      idElement.innerText = `ADVICE #${id}`
    })
}

const createElementCard = (data) => {
  const id = data.slip.id
  const advice = data.slip.advice

  const cardContainer = document.createElement("article");

  const adviceElement = document.createElement("p")
  adviceElement.classList.add("advice")
  adviceElement.innerText = `“${advice}”`

  const idElement = document.createElement("p")
  idElement.classList.add("id")
  idElement.innerText = `ADVICE #${id}`

  const pauseElement = document.createElement("div")
  pauseElement.insertAdjacentHTML("afterbegin", pause)
  pauseElement.classList.add("pause")

  const getCitationButton = document.createElement("button")
  getCitationButton.addEventListener("click", () => {
    handleButtonClick(adviceElement, idElement)
  })

  cardContainer.append(idElement, adviceElement, pauseElement, getCitationButton)
  return cardContainer
}

const appendCard = (data) => {
  const articleCard = createElementCard(data)
  main.append(articleCard)
}

const getApiData = () => {
  return fetch("https://api.adviceslip.com/advice")
    .then(res => {
      console.log(Object.fromEntries(res.headers.entries()))
      return res.json()
    })
}

const init = () => {
  getApiData()
    .then(data => {
      appendCard(data)
    })
}

init()