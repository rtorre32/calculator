
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
const equationSreen = document.querySelector("div.equation");
const answerScreen = document.querySelector("div.answer");
const deleteButton = document.querySelector("button.delete");
const clearButton = document.querySelector("button.clear");
const negativeButton = document.querySelector("button.negative");


//--------Variables-------------------------/
let answer = null;
let number = "";
let equation = "";
let firstNumber;
let secondNumber;
let lastClick = clearButton;

//--------------Event Listeners--------------------//
oneButton.addEventListener("click", () => {
    equation += "1";
    number += "1";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = oneButton;
})
twoButton.addEventListener("click", () => {
    equation += "2";
    number += "2";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = twoButton;
})
threeButton.addEventListener("click", () => {
    equation += "3";
    number += "3";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = threeButton;
})
fourButton.addEventListener("click", () => {
    equation += "4";
    number += "4";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = fourButton;
})
fiveButton.addEventListener("click", () => {
    equation += "5";
    number += "5";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = fiveButton;
})
sixButton.addEventListener("click", () => {
    equation += "6";
    number += "6";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = sixButton;
})
sevenButton.addEventListener("click", () => {
    equation += "7";
    number += "7";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = sevenButton;
})
eightButton.addEventListener("click", () => {
    equation += "8";
    number += "8";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = eightButton;
})
nineButton.addEventListener("click", () => {
    equation += "9";
    number += "9";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = nineButton;
})
zeroButton.addEventListener("click", () => {
    equation += "0";
    number += "0";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = zeroButton;
})
dotButton.addEventListener("click", () => {
    equation += ".";
    number += ".";
    equationSreen.innerHTML = equation;
    answerScreen.innerHTML = number;
    lastClick = dotButton;
})
addButton.addEventListener("click", () => {
    equation += " + ";
    firstNumber = parseInt(number);
    number = "";
    equationSreen.innerHTML = equation;
    lastClick = addButton;
})
subtractButton.addEventListener("click", () => {
    equation += " - ";
    firstNumber = parseInt(number);
    number = "";
    equationSreen.innerHTML = equation;
    lastClick = subtractButton;
})
divideButton.addEventListener("click", () => {
    equation += " ÷ ";
    firstNumber = parseInt(number);
    number = "";
    equationSreen.innerHTML = equation;
    lastClick = divideButton;
})
multiplyButton.addEventListener("click", () => {
    equation += " x ";
    equationSreen.innerHTML = equation;
    lastClick = multiplyButton;
})
equalsButton.addEventListener("click", () => {
    equation += " = ";
    equationSreen.innerHTML = equation;
    lastClick = equalsButton;
})

negativeButton.addEventListener("click", () => {
    answer *= -1;
    lastClick = negativeButton;
})

deleteButton.addEventListener("click", () => {
    lastClick = deleteButton;
})

clearButton.addEventListener("click", () => {
    answer = 0;
    number = "";
    equation = "";
    equationSreen.innerHTML = "";
    answerScreen.innerHTML = "";
    lastClick = clearButton;
})

