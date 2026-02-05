let note1 = Number(prompt("Note 1:"));
let note2 = Number(prompt("Note 2:"));
let note3 = Number(prompt("Note 3:"));
let note4 = Number(prompt("Note 4:"));
let note5 = Number(prompt("Note 5:"));
let Notendurchschnitt = note1 + note2 + note3 + note4 + note5;
let anzahlNoten = Number(prompt("Anzahl der Noten:"));
let durchschnitt = Notendurchschnitt / anzahlNoten;
if (durchschnitt <= 1.5) {
    console.log("Sehr gut");
}
else if (durchschnitt > 1.5 && durchschnitt <= 2.5) {
    console.log("Gut");
}
else if (durchschnitt > 2.5 && durchschnitt <= 3.5) {
    console.log("Befriedigend");
}
else if (durchschnitt > 3.5 && durchschnitt <= 4.5) {
    console.log("Ausreichend");
}
else if (durchschnitt > 4.5 && durchschnitt <= 5.5) {
    console.log("Mangelhaft");
}
else if (durchschnitt > 5.5 && durchschnitt <= 6.0) {
    console.log("Ungenügend");
}


