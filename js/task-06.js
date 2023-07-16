const inputText = document.getElementById("validation-input");
const inputLength = Number(inputText.dataset.length)

inputText.addEventListener("blur", onInput);

function onInput(evt) {
    if (evt.currentTarget.value.length === inputLength) {
        inputText.classList.add("valid")
        inputText.classList.remove("invalid")
    } else {
        inputText.classList.add("invalid")
        inputText.classList.remove("valid")
    }
}