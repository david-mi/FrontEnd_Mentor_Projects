const main = document.getElementById("main");

const buttonClick = () => {
    dataApi()
    .then(data => {
        const id = data.slip.id
        const advice = data.slip.advice
        const adviceEl = document.querySelector (".advice")
        const idAdvice = document.querySelector (".id")

        adviceEl.innerText = `“${advice}”`
        idAdvice.innerText = `ADVICE #${id}`
    })
}

const createHTML = ({ id, advice}) => {
    const container = document.createElement("article");
    
    const idAdvice = document.createElement("p");
    idAdvice.classList.add("id")
    idAdvice.innerText = `ADVICE #${id}`

    const adviceEl = document.createElement("p");
    adviceEl.classList.add("advice")
    adviceEl.innerText = `“${advice}”`

    const buttonCitation = document.createElement("button")
    buttonCitation.addEventListener("click", buttonClick)

    container.append(idAdvice, adviceEl, buttonCitation)
    return container
}

const dataApi = () => {
    return fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
};

const init = () => {
    dataApi()
        .then(data => {
            console.log(data);
            const section = createHTML(data.slip)
            main.append(section)
        })
}
init();