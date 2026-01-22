console.log("Compute the average value of numbers in an array.");
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Number(prompt("Enter number " + (i + 1) + ":")));
}
let sum = 0;
for (let num of arr) {
    sum += num;
}
let average = sum / arr.length;
console.log("The average value of the entered numbers is: " + average);