"use strict";
// ÜBUNG 1
const myLitleString = "This is my litle String";
const myNumber = 1;
const myString = "Hallo string";
const ananas = false;
// ÜBUNG 3
function introduction(param) {
    return ("Hallo, mein Inhalt ist: " + param);
}
introduction("Lars");
introduction(false);
introduction(5);
// ÜBUNG 4
const showContent = (param) => {
    if (typeof param === "undefined") {
        return "Ich habe kein Inhalt";
    }
    else {
        return ("Hallo, mein Inhalt ist: " + param);
    }
};
showContent(undefined);
showContent("Hallo");
// ÜBUNG 5
const keepPlaying = (param) => {
    if (typeof param === "number" && param < 10) {
        return true;
    }
    else if (param === true) {
        return true;
    }
    else {
        return false;
    }
};
keepPlaying(1);
keepPlaying(true);
keepPlaying(10);
// ÜBUNG 6
const move = (move) => {
    const moveLower = move.toLowerCase();
    switch (moveLower) {
        case "links":
            return 0;
            break;
        case "rechts":
            return 1;
            break;
        case "vor":
            return 2;
            break;
        case "zurück":
            return 3;
            break;
        default: undefined;
    }
};
move("rechts");
move("lInKS");
move("mein kolleg kann einfach batflip");
// ÜBUNG 7
const input = document.getElementById("input");
const output = document.getElementById("output");
// const abc = document.getElementById("output")
input === null || input === void 0 ? void 0 : input.addEventListener("input", (event) => {
    const { target } = event;
    const getMove = move(target.value);
    if (typeof getMove === "undefined") {
        output.innerText = "Error";
        return;
    }
    else {
        output.innerText = getMove.toString();
    }
});
