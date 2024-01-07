// for loops

for (let i = 0; i < 5; i++) {
  console.log("in loop:", i);
}

console.log("Loop fnished");

const names = ["sean", "merio", "luigus"];

for (let i = 0; i < names.length; i++) {
  console.log("in loop:", names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

console.log("Loop fnished");

// while loop
let j = 0;
while (j < names.length) {
  console.log("in loop: ", names[j]);
  j++;
}

// Do while loop
let i = 8;
do {
  console.log("in: ", i);
  i++;
} while (i < 5); // will run once, but if it doesnt meet while will not run again

// if statments
age = 20;
if (age > 20) {
  console.log("you are OVER 20");
}

const ninjas = ["sean", "merio", "luigus", "blanke"];

if (ninjas.length > 3) {
  console.log("That's a lot of ninjas");
}

const password = "pas@5";
if (password.length >= 12 && password.includes("@")) {
  console.log("That password is strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length > 5)
) {
  console.log("that password is good enough");
} else {
  console.log("password not long enough");
}

//logial NOT
let user = false;

if (!user) {
  console.log("You must be logged in");
}

// Break and continue
const scores = [50, 0, 20, 11, 100, 15, 82, 1, 99];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log("your score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats high score");
    break;
  }
}

// switch
const grade = "D";

switch (grade) {
  case "A":
    console.log("you got an A");
    break;
  case "B":
    console.log("you got an B");
    break;

  case "C":
    console.log("you got an C");
    break;

  case "D":
    console.log("you got an D");
    break;

  case "E":
    console.log("you got an E");
    break;

  default:
    console.log("not a valid grade");
}

// using if statments
if (grade === "A") {
} else if (grade === "B") {
} else if (grade === "C") {
} else if (grade === "D") {
} else if (grade === "E") {
} else {
}

// variables and block scope
let age1 = 30; // global scope

if (true) {
  // age1 = 40; // redefines orignal (errors next line if not commented out)
  let age1 = 40; // makes new variable named age that has local scope
  let name1 = "sean";
  console.log("inside code block: ", age1, name1);

  if (true) {
    let age1 = 50;
    console.log("inside second code block: ", age1);
  }
}

// console.log("outside code block: ", age1, name1); // errors as name is not defined (works in video though)
console.log("outside code block: ", age1);
