const inputName = document.getElementById("name-input");

const outputName = document.getElementById("name-output");



inputName.addEventListener("input", onInput) 
function onInput(evt) {
    outputName.textContent = inputName.value
}