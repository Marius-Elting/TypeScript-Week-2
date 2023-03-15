

type Car = {
    brand: string;
    model: string;
    color: string;
}

// Wenn hier nicht alle werte richtig mitgegeben werden, kommt es zu einem error
const redCar: Car = {
    brand: "Fiat",
    model: "500",
    color: "red",
}

// Nested Typ Object
type Car2 = {
    brand: string;
    model: string;
    color: string;
    owner: {
        name: string;
        birthday: string;
    }
}

// Meist ist es jedoch schöner es folgendermaßen zu schreiben


type Owner = {
    name: string;
    birthday: string
}

type Car3 = {
    brand: string;
    model: string;
    color: string;
    owner: Owner
}

// dann können wir den Owner beispielsweise auch noch für Motorräder nutzen


type Motorcycle = {
    brand: string;
    model: string;
    wheels: number;
    owner: Owner;
}


const blueCar: Car3 = {
    brand: "Fiat",
    model: "500",
    color: "red",
    owner: {
        name: "Peter",
        birthday: "12.12.1999"
    }
}

const printCarOwner = (car: Car3) => {
    console.log(
        "Der Besitzer ist: " +
        car.owner.name +
        " und der hat am " +
        car.owner.birthday +
        " Geburtstag."
    )
}


printCarOwner(blueCar)


const printOwner = ({ owner }: { owner: Owner }) => {
    console.log(
        "Der Besitzer ist: " +
        owner.name +
        " und der hat am " +
        owner.birthday +
        " Geburtstag."
    )
}

printOwner(blueCar)

