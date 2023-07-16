const inputName = document.getElementById("name-input");
console.dir(inputName)
const outputName = document.getElementById("name-output");
console.dir(outputName)


inputName.addEventListener("input", onInput) 
function onInput(evt) {
    outputName.textContent = inputName.value
}