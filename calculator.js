
//---------Const Variables-------------------//
const oneButton = document.querySelector("button.one");
const twoButton = document.querySelector("button.two");
const threeButton = document.querySelector("button.three");
const fourButton = document.querySelector("button.four");
const fiveButton = document.querySelector("button.five");
const sixButton = document.querySelector("button.six");
const sevenButton = document.querySelector("button.seven");
const eightButton = document.querySelector("button.eight");
const nineButton = document.querySelector("button.nine");
const zeroButton = document.querySelector("button.zero");
const dotButton = document.querySelector("button.dot");
const addButton = document.querySelector("button.add");
const subtractButton = document.querySelector("button.subtract");
const divideButton = document.querySelector("button.divide");
const multiplyButton = document.querySelector("button.multiply");
const equalsButton = document.querySelector("button.equals");
const screen = document.querySelector("div.screen");

//--------------Event Listeners--------------------//
oneButton.addEventListener("click",  () => {
    screen.innerHTML += "1 ";
})
twoButton.addEventListener("click",  () => {
    screen.innerHTML += "2 ";
})
threeButton.addEventListener("click",  () => {
    screen.innerHTML += "3 ";
})
fourButton.addEventListener("click",  () => {
    screen.innerHTML += "4 ";
})
fiveButton.addEventListener("click",  () => {
    screen.innerHTML += "5 ";
})
sixButton.addEventListener("click",  () => {
    screen.innerHTML += "6 ";
})
sevenButton.addEventListener("click",  () => {
    screen.innerHTML += "7 ";
})
eightButton.addEventListener("click",  () => {
    screen.innerHTML += "8 ";
})
nineButton.addEventListener("click",  () => {
    screen.innerHTML += "9 ";
})
zeroButton.addEventListener("click",  () => {
    screen.innerHTML += "0 ";
})
dotButton.addEventListener("click",  () => {
    screen.innerHTML += ". ";
})
addButton.addEventListener("click",  () => {
    screen.innerHTML += "+ ";
})
subtractButton.addEventListener("click",  () => {
    screen.innerHTML += "- ";
})
divideButton.addEventListener("click",  () => {
    screen.innerHTML += "÷ ";
})
multiplyButton.addEventListener("click",  () => {
    screen.innerHTML += "x ";
})
equalsButton.addEventListener("click",  () => {
    screen.innerHTML += "= ";
})

