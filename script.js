
function add(numA, numB)
{
    return (Number(numA) + Number(numB));
}

function subtract(numA, numB)
{
    return (Number(numA) - Number(numB));
}

function multiply(numA, numB)
{
    return (Number(numA) * Number(numB));
}

function divide(numA, numB)
{
    return (Number(numA) / Number(numB));
}

function operator(numA, operatorArg, numB)
{

    let answer = 0;

    if (operatorArg === "+")
    {
        answer = add(numA, numB);
    }
    else if (operatorArg === "-")
    {
        answer = subtract(numA, numB);
    }
    else if (operatorArg === "*")
    {
        answer = multiple(numA, numB);
    }
    else if (operatorArg === "/")
    {
        answer = divide(numA, numB);
    }
    else
    {



    }

}

function display(stringArg)
{

    //currentDisplay = currentDisplay + stringArg;
    //calcDisplay.textContent = currentDisplay;


    if
    (
        (
            operatorExists === false
        )
        &&
        (
            stringArg === "1" ||
            stringArg === "2" ||
            stringArg === "3" ||
            stringArg === "4" ||
            stringArg === "5" ||
            stringArg === "6" ||
            stringArg === "7" ||
            stringArg === "8" ||
            stringArg === "9" ||
            stringArg === "0" 
        )
    )
    {
        numOne = numOne + stringArg;
    }
    else if
    (
        (
            stringArg === "+" ||
            stringArg === "-" ||
            stringArg === "*" ||
            stringArg === "/"
        )
        &&
        (
            operatorExists === false
        )
        &&
        (
            numOne !== ""
        )
    )
    {
        operatorExists = true;
        operatorSymbol = stringArg;
    }
    else if
    (
        (
            operatorExists === true
        )
        &&
        (
            stringArg === "1" ||
            stringArg === "2" ||
            stringArg === "3" ||
            stringArg === "4" ||
            stringArg === "5" ||
            stringArg === "6" ||
            stringArg === "7" ||
            stringArg === "8" ||
            stringArg === "9" ||
            stringArg === "0" 
        )
    )
    {
        numTwo = numTwo + stringArg;
    }
    else if (stringArg === "=")
    {

        if (operatorSymbol === "+")
        {
            answer = add(numOne, numTwo);
        }
        if (operatorSymbol === "-")
        {
            answer = subtract(numOne, numTwo);
        }
        if (operatorSymbol === "*")
        {
            answer = multiply(numOne, numTwo);
        }
        if (operatorSymbol === "/")
        {
            answer = divide(numOne, numTwo);
        }

        //calcDisplay.textContent = answer;

        answerExists = true;

    }
    else if (stringArg === "C")
    {

        numOne = "";
        operatorSymbol = "";
        numTwo = "";

        /***********************************************/
        /*****        MAKE ANSWER ARRAY ???        *****/
        /***********************************************/
        answer = "";

        operatorExists = false;
        answerExists = false;

    }

    if (answerExists === false)
    {

        calcDisplay.textContent = `${numOne} ${operatorSymbol} ${numTwo}`;

    }
    else
    {

        calcDisplay.textContent = answer;

    }

}

let numOne = "";
let operatorSymbol = "";
let numTwo = "";
let operatorExists = false;
let answerExists = false;

let answer;

const calcDisplay = document.querySelector(`#calc-display`);


////////////////////////////////////////////////////////////////////
const oneButton = document.querySelector(`#one-button`);
const twoButton = document.querySelector(`#two-button`);
const threeButton = document.querySelector(`#three-button`);
const fourButton = document.querySelector(`#four-button`);
const fiveButton = document.querySelector(`#five-button`);
const sixButton = document.querySelector(`#six-button`);
const sevenButton = document.querySelector(`#seven-button`);
const eightButton = document.querySelector(`#eight-button`);
const nineButton = document.querySelector(`#nine-button`);
const zeroButton = document.querySelector(`#zero-button`);

const addButton = document.querySelector(`#add-button`);
const subtractButton = document.querySelector(`#subtract-button`);
const multiplyButton = document.querySelector(`#multiply-button`);
const divideButton = document.querySelector(`#divide-button`);

const equalButton = document.querySelector(`#equal-button`);
const clearButton = document.querySelector(`#clear-button`);
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
oneButton.addEventListener("click", () => display("1") );
twoButton.addEventListener("click",  () => display("2") );
threeButton.addEventListener("click", () => display("3") );
fourButton.addEventListener("click", () => display("4") );
fiveButton.addEventListener("click", () => display("5") );
sixButton.addEventListener("click", () => display("6") );
sevenButton.addEventListener("click", () => display("7") );
eightButton.addEventListener("click", () => display("8") );
nineButton.addEventListener("click", () => display("9") );
zeroButton.addEventListener("click", () => display("0") );

addButton.addEventListener("click", () => display("+") );
subtractButton.addEventListener("click", () => display("-") );
multiplyButton.addEventListener("click", () => display("*") );
divideButton.addEventListener("click", () => display("/") );

equalButton.addEventListener("click", () => display("=") );
clearButton.addEventListener("click", () => display("C") );
////////////////////////////////////////////////////////////////////


