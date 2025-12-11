console.log("How is the weather today?");
let weather = prompt("What is the temperature in degrees Celsius?");
if (weather >= 25) {
    console.log("Go outside and enjoy the sunshine!");
} else if (weather <= 18) {
    console.log("Put something light on.");
} else if (weather <= 10) {
    console.log("It might rain today.");
} else if (weather <= 0) {
    console.log("Wear warm things");
} else {
    console.log("Unknown weather.");
}