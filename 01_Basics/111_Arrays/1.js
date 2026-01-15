let arr = [];
for (let i = 0; i < 7; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log("The generated array is: " + arr);
let sum = 0;
for (let num of arr) {
    sum += num;
}
console.log("The sum of all elements in the array is: " + sum); 