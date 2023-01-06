let numbers = [];
let operator = "";
let number = "";
const calc = document.getElementById("calc");
const result = document.getElementById("result");
calc.innerText = "";

function handleClick(value) {
    if (typeof value === "number") {
        number += value;
        calc.innerHTML += value;
    } else {
        if (value === "x" || value === "+" || value === "-" || value === "/") {
            if (operator !== "") {
                calculate();
                operator = "";
            }
            operator = value;
            if (number !== "") numbers.push(Number(number));
            number = "";
            calc.innerHTML += ` ${value} `;
        } else {
            switch (value) {
                case "ac":
                    calc.innerHTML = "";
                    result.innerHTML = "";
                    operator = "";
                    number = "";
                    numbers = [];
                    break;
                case "=":
                    if (operator !== "" && number !== "") {
                        calc.innerHTML += ` = `;
                        calculate();
                    } else {
                        window.alert(
                            "Selecione uma operação e/ou digite outro número"
                        );
                    }
            }
        }
    }
}
function calculate() {
    numbers.push(Number(number));
    console.log(numbers);
    number = "";
    let value;

    switch (operator) {
        case "+":
            value = numbers[0] + numbers[1];
            break;
        case "-":
            value = numbers[0] - numbers[1];
            break;
        case "/":
            if (numbers[1] !== 0) {
                value = numbers[0] / numbers[1];
                value = Math.round((value + Number.EPSILON) * 100) / 100;
            } else {
                window.alert(
                    "Não existe divisão por 0. Apague e escreva outro cálculo"
                );
                return;
            }
            break;
        case "x":
            value = numbers[0] * numbers[1];
            break;
    }
    numbers.pop();
    numbers[0] = value;
    result.innerHTML = value;
}
