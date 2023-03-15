"use strict";
// Wenn hier nicht alle werte richtig mitgegeben werden, kommt es zu einem error
const redCar = {
    brand: "Fiat",
    model: "500",
    color: "red",
};
const blueCar = {
    brand: "Fiat",
    model: "500",
    color: "red",
    owner: {
        name: "Peter",
        birthday: "12.12.1999"
    }
};
const printCarOwner = (car) => {
    console.log("Der Besitzer ist: " +
        car.owner.name +
        " und der hat am " +
        car.owner.birthday +
        " Geburtstag.");
};
printCarOwner(blueCar);
const printOwner = ({ owner }) => {
    console.log("Der Besitzer ist: " +
        owner.name +
        " und der hat am " +
        owner.birthday +
        " Geburtstag.");
};
printOwner(blueCar);
