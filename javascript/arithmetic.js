let a = parseFloat(prompt("Enter the value of a"));
let b = parseFloat(prompt("Enter the value of b"));
let choice = parseInt(prompt(
    "Enter your choice:\n" +
    "1. Addition\n" +
    "2. Subtraction\n" +
    "3. Multiplication\n" +
    "4. Division\n" +
    "5. Modulos"
));

switch(choice) {
    case 1:
        addition(a, b);
        break;
    case 2:
        subtraction(a, b);
        break;
    case 3:
        multiplication(a, b);
        break;
    case 4:
        division(a, b);
        break;
    case 5:
        modulus(a, b);
        break;
    default:
        console.log("Invalid choice");
}

function addition(a, b) {
    let sum = a + b;
    console.log("Sum of a + b is : ", sum);
}

function subtraction(a, b) {
    let subtraction = a - b;
    console.log("Subtraction of a - b is : ", subtraction);
}

function multiplication(a, b) {
    let multiplication = a * b;
    console.log("Multiplication of a * b is : ", multiplication);
}

function division(a, b) {
    if (b !== 0) {
        let division = a / b;
        console.log("Division of a / b is : ", division);
    } else {
        console.log("Cannot divide by zero");
    }
}

function modulus(a, b) {
    if (b !== 0) {
        let modulos = a % b;
        console.log("Modulos of a % b is : ", modulos);
    } else {
        console.log("Cannot modulos by zero");
    }
}
