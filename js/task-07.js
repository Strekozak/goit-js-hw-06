const inputControl = document.getElementById("font-size-control");

const text = document.getElementById("text");


inputControl.addEventListener("input", onInput);

function onInput(evt) {
    const textSize = `${evt.currentTarget.value}px`;
    text.style.fontSize = textSize
}