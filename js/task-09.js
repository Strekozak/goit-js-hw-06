const textColor = document.querySelector(".color")
console.dir(textColor)
const btnColor = document.querySelector(".change-color")

btnColor.addEventListener("click", onClick)

function onClick(evt) {
  const bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  textColor.textContent = bodyColor
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
