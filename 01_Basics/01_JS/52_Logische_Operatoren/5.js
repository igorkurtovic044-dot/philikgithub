let heartRate = Number(prompt("Enter your heart rate (in bpm):"));
let age = Number(prompt("Enter your age:"));
if (age < 30 && heartRate < 100) {
    console.log("Light Exercise");
} else if (age >= 30 && heartRate <= 50) {
    console.log("Hard Exercise");
} else if (age <= 50 || heartRate > 120) {
    console.log("Go to a doctor");
} else {
    console.log("Leave the Gym");
}