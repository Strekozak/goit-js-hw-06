const value = document.querySelector("#value");

const btnMinus = document.querySelector('button[data-action="decrement"] ');

let counterValue = 0;

btnMinus.addEventListener('click', onClickM);
function onClickM(evt) {
    counterValue -= 1;
    value.textContent = counterValue;
}

const btnPlus = document.querySelector('button[data-action="increment"] ');
btnPlus.addEventListener('click', onClickP);
function onClickP(evt) {
    counterValue += 1;
    value.textContent = counterValue;
}

