var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function incrementar() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrementar() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}