var screen = document.querySelector("#screen");

var operator, num1 = 0, num2 = 0, squareRoot;

function num(numParameter) {
    if (!operator) {
        num1 = num1 + numParameter;
        screen.innerHTML = Number(num1)
    }
    else {
        num2 = num2 + numParameter;
        screen.innerHTML = Number(num2)
    }
}

function setOperator(operatorParameter) {
    operator = operatorParameter;
    screen.innerHTML = 0;
}

function calculate() {
    if (operator === "+") {
        screen.innerHTML = Number(num1) + Number(num2);
    }
    else if (operator === "-") {
        screen.innerHTML = Number(num1) - Number(num2);
    }
    else if (operator === "x") {
        screen.innerHTML = Number(num1) * Number(num2);
    }
    else if (operator === "÷") {
        screen.innerHTML = Number(num1) / Number(num2);
    }
    else if (operator === "√") {
        screen.innerHTML = (Math.sqrt(num1));
    }
    else if (operator === "+" && operator === "√") {
         
        screen.innerHTML = Number(num1) + Number(num2) (Math.sqrt(num1));
    }
}

function clearAll() {
    operator = undefined;
    num1 = "0";
    num2 = "0";
    screen.innerHTML = "0";
}



