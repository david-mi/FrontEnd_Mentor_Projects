const main = document.getElementById("main");

const buttonClick = () => {
    console.log("click")
}

const createHTML = ({ id, advice}) => {
    const container = document.createElement("article");
    
    const idAdvice = document.createElement("p");
    idAdvice.innerText = id
    const adviceEl = document.createElement("p");
    adviceEl.innerText = advice
    const buttonCitation = document.createElement("button")
    buttonCitation.addEventListener("click", buttonClick)

    container.append(idAdvice, adviceEl, buttonCitation)
    return container
}

const dataApi = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        console.log(data.slip);
        const section = createHTML(data.slip)
        main.append(section)
    })
}
dataApi()