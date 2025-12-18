console.log("How many number do you want to enter so ic can tell you the average?");
let a = Number(prompt("Enter the amount of numbers you want to enter:"));
let sum = 0;
for (let i = 1; i <= a; i++) {
    let num = Number(prompt("Enter number " + i + ":"));
    sum += num;
}
let average = sum / a;
console.log("The average of the entered numbers is: " + average);