//Assingment 1
function greating() {
  console.log("Hello can you please tell me your name?");

  const name = prompt("What is your name?");

  console.log(`Nice to meet you ${name}`);
}
function concat() {
  console.log("Give me two numbers ill add them up");
  const a = prompt("First number");
  const b = prompt("Second number");
  const number = Number.parseInt(a ?? "0") + Number.parseInt(b ?? "0");
  if (a !== null && b !== null) {
    console.log(`The sum of the two numbers is ${number}`);
    return number;
  }
}
function numberGame() {
  console.log("Lets play a game give me two numbers");
  const a = prompt("First number");
  const b = prompt("Second number");
  if (a !== null && b !== null) {
    if (a > b) {
      console.log("The first number is greater");
      return;
    }
    console.log("The second number is greater");
    return;
  }
  console.log("The second number is greater");
}
greating();
concat();
numberGame();

//Assingment 2
function isEven() {
  console.log("Give me a number ill tell you if it is even");
  const input = prompt("Number");
  const a = Number.parseInt(input ?? "0");
  if (a !== null) {
    if (a % 2 === 0) {
      console.log("Its even");
      return;
    }
    console.log("Its odd");
    return;
  }
  console.log("Its odd");
}
function amIEightien() {
  let input = prompt("Number");
  let age = Number.parseInt(input ?? "0");
  if (age !== null && age >= 18) {
    console.log("Your are of legal age");
    return;
  }
  if (age !== null && age < 18 && age > 15) {
    console.log(
      `You are underaged but you will be of legal age in ${18 - age}`,
    );
  }
  console.log("You are underaged and also under 15");
}
isEven();
amIEightien();

//Assingment 3
function countTillHundred() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

countTillHundred();

//Assingment 4
function myFriendsList() {
  let friends = ["Pepa", "Eva", "Niky", "Anna", "Peter"];
  for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
  }
  console.log("My friends form A to Z");
  let sortedFriends = friends.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sortedFriends.length; i++) {
    console.log(sortedFriends[i]);
  }
}
function randomNumberAvrg() {
  let array = [];
  console.log("My numbers of random choice");
  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100);
    array.push(number);
    console.log(number);
  }
  console.log(
    `The average of the random numbers is ${array.reduce((a, b) => a + b, 0) / array.length}`,
  );
}

myFriendsList();
randomNumberAvrg();

//Assingment 5
function greeting(name: string) {
  console.log(`Hello ${name}`);
}
function sort(array: number[]) {
  return array.sort((a, b) => a - b);
}
greeting("Pepa");
console.log(sort([24, 12, 3, 5, 1, 2, 4, 6, 7, 8, 9, 10]));

//Assingment 6
const person = {
  name: "Pepa",
  age: 25,
  greeting: () => {
    console.log(`Hello I am ${person.name} and I am ${person.age} years old`);
  },
};
person.greeting();
const car = {
  brand: "Volkswagen",
  model: "Passat",
  year: 2020,
  stats: () => {
    console.log(`I am driving a ${car.brand} ${car.model} from ${car.year}`);
  },
};
car.stats();

function listBooks() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "The Catcher in the Rye",
      author: "J. D. Salinger",
      year: 1951,
    },
  ];
  for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
  }
}
listBooks();

