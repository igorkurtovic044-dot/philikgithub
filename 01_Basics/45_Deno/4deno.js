prompt("How old are you?");
let age = Number(prompt("Enter your age:"));
if (age < 0) {
    console.log("Error: Age cannot be negative.");
}
else if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior citizen.");
}   
