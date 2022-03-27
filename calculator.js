
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
let operation;
let isInt = 1;

//--------------Event Listeners--------------------//
oneButton.addEventListener("click", () => {
    number += "1";
    answerScreen.innerHTML = number;
})
twoButton.addEventListener("click", () => {
    number += "2";
    answerScreen.innerHTML = number;
})
threeButton.addEventListener("click", () => {
    number += "3";
    answerScreen.innerHTML = number;
})
fourButton.addEventListener("click", () => {
    number += "4";
    answerScreen.innerHTML = number;
})
fiveButton.addEventListener("click", () => {
    number += "5";
    answerScreen.innerHTML = number;
})
sixButton.addEventListener("click", () => {
    number += "6";
    answerScreen.innerHTML = number;
})
sevenButton.addEventListener("click", () => {
    number += "7";
    answerScreen.innerHTML = number;
})
eightButton.addEventListener("click", () => {
    number += "8";
    answerScreen.innerHTML = number;
})
nineButton.addEventListener("click", () => {
    number += "9";
    answerScreen.innerHTML = number;
})
zeroButton.addEventListener("click", () => {
    number += "0";
    answerScreen.innerHTML = number;
})
dotButton.addEventListener("click", () => {
    isInt = 0;
    number += ".";
    answerScreen.innerHTML = number;
})
addButton.addEventListener("click", () => {
    getFirstNumber();
    equation += " + ";
    equationSreen.innerHTML = equation;
    operation = "+";
})
subtractButton.addEventListener("click", () => {
    getFirstNumber();
    equation += " - ";
    equationSreen.innerHTML = equation;
    operation = "-";
})
divideButton.addEventListener("click", () => {
    getFirstNumber();
    equation += " ÷ ";
    equationSreen.innerHTML = equation;
    operation = "÷";
})
multiplyButton.addEventListener("click", () => {
    getFirstNumber();
    equation += " x ";
    equationSreen.innerHTML = equation;
    operation = "x";
})
equalsButton.addEventListener("click", () => {
    equalsFunction();
    equationSreen.innerHTML = equation;
    equation = "";
})

negativeButton.addEventListener("click", () => {
    number = "-".concat(number);
    answerScreen.innerHTML = number;
})

deleteButton.addEventListener("click", () => {
    number = "";
    answerScreen.innerHTML = number;
})

clearButton.addEventListener("click", () => {
    answer = 0;
    number = "";
    equation = "";
    equationSreen.innerHTML = "";
    answerScreen.innerHTML = "";
})


//---------------------Functions---------------//

function getFirstNumber(){
    if(!isInt){
        firstNumber = parseFloat(number);
        isInt = 1;
    }
    else{
        firstNumber = parseInt(number);
    }
    equation += number;
    number = "";
}

function equalsFunction(){
    let secondNumber;
    if(!isInt){
        secondNumber = parseFloat(number);
        isInt = 1;
    }
    else{
        secondNumber = parseInt(number);
    }
    switch(operation){
        case "+":
            answer = firstNumber + secondNumber;
            break;
        case "-":
            answer = firstNumber - secondNumber;
            break;
        case "x":
            answer = firstNumber * secondNumber;
            break;
        case "÷":
            answer = firstNumber / secondNumber;
            break;
    }

    if(!Number.isInteger(answer)){
        answer = answer.toFixed(2);
    }

    equation += secondNumber;
    equation += " = ";
    equation += answer;

    number = answer.toString();
    answerScreen.innerHTML = answer;
}

