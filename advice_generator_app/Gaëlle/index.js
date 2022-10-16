const main = document.getElementById("main");

fetch("https://api.adviceslip.com/advice")
	.then(response => response.json())
	.then(data => console.log(data))

const creactElement = (data) => {
    const container = document.createElement("article");
    
    const idAdvice = document.createElement("p");
    const advice = document.createElement("p");
    const pause = document.createElement("div")
    const buttonCitation = document.createElement("button")

    container.append(idAdvice, advice, pause, buttonCitation)
    return container
}