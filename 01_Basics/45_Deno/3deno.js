prompt("Say two Numbers and i will calculate Them for you");
let num1 = Number(prompt("First Number:"));
let num2 = Number(prompt("Second Number:"));
let operation = prompt("Choose an operation: +, -, *, /");

if (operation == "+") {
    console.log("The result is: " + (num1 + num2));
}
else if (operation == "-") {
    console.log("The result is: " + (num1 - num2));
}
else if (operation == "*") {
    console.log("The result is: " + (num1 * num2));
}
else if (operation == "/") {
    console.log("The result is: " + (num1 / num2));
}
else {
    console.log("Invalid operation");
}

