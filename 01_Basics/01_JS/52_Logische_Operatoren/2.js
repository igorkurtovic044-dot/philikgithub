let speed = Number(prompt("Enter your speed in km/h:"));
let trafficLevel = prompt("Enter the traffic level 1-10:");
if (speed > 80 || trafficLevel > 7) {
    console.log("Slow down");
} else {
    console.log("Your good to go");
}