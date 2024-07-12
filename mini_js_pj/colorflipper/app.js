const body = document.getElementsByTagName("body")[0]
const greenBtn = document.getElementById("green")

function setColor(name) {
    body.style.backgroundColor = name
}

function randomColor() {
    const red = Math.random() * 255
    const green = Math.random() * 255
    const blue = Math.random() * 255
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}