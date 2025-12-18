let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));
let sum = 0;
for (let i = a; i <= b; i++) {
    sum = i + sum;
}
console.log("The sum of numbers from " + a + " to " + b + " is: " + sum);