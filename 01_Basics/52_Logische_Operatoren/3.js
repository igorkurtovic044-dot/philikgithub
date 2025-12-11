let grade = Number(prompt("Enter your grade 0-100:"));
let attendance = Number(prompt("Enter your attendance  0-100):"));
let extraCredit = prompt("Did you complete extra credit? 0-10:");
if (grade > 90 && attendance > 80 || extraCredit === "yes") {
    console.log("Eligible for advanced exam");
} else {
    console.log("Not eligible for advanced exam");
}