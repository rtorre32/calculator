
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
let answer = 0;

//--------------Event Listeners--------------------//
oneButton.addEventListener("click", () => {
    equationSreen.innerHTML += "1";
    answerScreen.innerHTML = "1";
    answer += 1;
})
twoButton.addEventListener("click", () => {
    equationSreen.innerHTML += "2";
    answerScreen.innerHTML = "2";
})
threeButton.addEventListener("click", () => {
    equationSreen.innerHTML += "3";
    answerScreen.innerHTML = "3";
})
fourButton.addEventListener("click", () => {
    equationSreen.innerHTML += "4";
    answerScreen.innerHTML = "4";
})
fiveButton.addEventListener("click", () => {
    equationSreen.innerHTML += "5";
    answerScreen.innerHTML = "5";
})
sixButton.addEventListener("click", () => {
    equationSreen.innerHTML += "6";
    answerScreen.innerHTML = "6";
})
sevenButton.addEventListener("click", () => {
    equationSreen.innerHTML += "7";
    answerScreen.innerHTML = "7";
})
eightButton.addEventListener("click", () => {
    equationSreen.innerHTML += "8";
    answerScreen.innerHTML = "8";
})
nineButton.addEventListener("click", () => {
    equationSreen.innerHTML += "9";
    answerScreen.innerHTML = "9";
})
zeroButton.addEventListener("click", () => {
    equationSreen.innerHTML += "0";
    answerScreen.innerHTML = "0";
})
dotButton.addEventListener("click", () => {
    equationSreen.innerHTML += ".";
})
addButton.addEventListener("click", () => {
    equationSreen.innerHTML += " + ";
})
subtractButton.addEventListener("click", () => {
    equationSreen.innerHTML += " - ";
})
divideButton.addEventListener("click", () => {
    equationSreen.innerHTML += " ÷ ";
})
multiplyButton.addEventListener("click", () => {
    equationSreen.innerHTML += " x ";
})
equalsButton.addEventListener("click", () => {
    equationSreen.innerHTML += " = ";
})

negativeButton.addEventListener("click", () => {
    answer *= -1;
    console.log("negative");
    answerScreen.innerHTML = "NEGATIVE";
})

deleteButton.addEventListener("click", () => {
    console.log("delete");
})

clearButton.addEventListener("click", () => {
    console.log("Clearing");
})

