function displayMenu() {
    console.log("Welcome to the Simple Menu");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
}

function performOperation(choice) {
    let result;
    switch (choice) {
        case 1:
            result = performAddition();
            break;
        case 2:
            result = performSubtraction();
            break;
        case 3:
            result = performMultiplication();
            break;
        case 4:
            result = performDivision();
            break;
        case 5:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice");
    }
    return result;
}

function performAddition() {
    const num1 = 5;
    const num2 = 3;
    return num1 + num2;
}

function performSubtraction() {
    const num1 = 10;
    const num2 = 4;
    return num1 - num2;
}

function performMultiplication() {
    const num1 = 6;
    const num2 = 7;
    return num1 * num2;
}

function performDivision() {
    const num1 = 20;
    const num2 = 5;
    return num1 / num2;
}

// Example usage:
displayMenu();
const userChoice = 3; // Example choice: 3 for multiplication
const result = performOperation(userChoice);
console.log("Result:", result);