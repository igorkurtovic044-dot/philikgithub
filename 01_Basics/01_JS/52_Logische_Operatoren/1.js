let Temperature = (Math.floor(Math.random() * 30) + " Celsius");
let Humidity = (Math.floor(Math.random() * 67) + "%");
console.log("Current Temperature: " + Temperature);
console.log("Current Humidity: " + Humidity);
if (Temperature >= 20 && Temperature <= 25 && Humidity <= 60) {
    console.log("Perfect day for outdoor activities");
} else if (Temperature < 20 || Temperature > 25 || Humidity >= 60) {
    console.log("Stay Indoors");
} else
    console.log("Consult a doctor before exercising");
