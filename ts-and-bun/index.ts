// Úkol 1
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;
let myNumberArray = [1, 2, 3, 4, 5];

function multiply(a: number, b: number, showResult?: boolean) {
    const result = a * b;
    if (showResult) {
        console.log(result);
    }
    return result;
}

multiply(5, 6, true);
multiply(5, 6);

// Úkol 2
function getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
}

console.log(getFullName("John", "Doe"));

// Úkol 3
interface Car {
    make: string;
    model: string;
    year: number;
}

let myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(myCar.make, myCar.model);

// Úkol 4
function greet(name: string, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet("Eve"));
console.log(greet("Peter", "Hi"));

// Úkol 5
function printId(id: number | string) {
    console.log(typeof id === "number" ? `ID is number: ${id}` : `ID is string: "${id}"`);
}

printId(123);
printId("abc");

// Úkol 6
function identity<T>(arg: T) {
    return arg;
}

console.log(identity(42));
console.log(identity("Hello"));
console.log(identity(true));
