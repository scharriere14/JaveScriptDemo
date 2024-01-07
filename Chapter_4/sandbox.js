// function declaration
function greet() {
  console.log("hello there");
}

// function expression

const speak = function (name = "luigi", time = "night") {
  // noting the = sets defualt values if none are given
  console.log(`good ${time} ${name}`);
}; // note the close

greet(); // invoke function
speak("mario", "morning");
speak(); // uses the default values

const calcArea = function (radius) {
  // let area = 3.14 * radius ** 2;
  // console.log("inside function " + area);
  // return area;

  return 3.14 * radius ** 2;
};

const area = calcArea(5); // area saves the return value of method
console.log(area);

// then can use the use area
const calcVol = function (area) {
  // does something to calcualte the volum of area
};

calcVol(area); // call function

// arrow function
const calcArea2 = (radius) => {
  return 3.14 * radius ** 2;
};

console.log(calcArea2(3));

// sinplify arrow function
const calcArea3 = (radius) => 3.14 * radius ** 2;
// removed brackets around radius as there is only one, 0 or more then 1 will see need them
// removed curly and removed the work return "when theres only a single return line can remove"

// pratice from example
const greet8 = () => "hello world";

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
// next example - diffrene between fuction and method is how to call them
const name = "shane";
// function
const greeting = () => "hello";

let resultOne = greeting();
console.log(resultOne);

// method
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbaacks & forreach

const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

myFunc(function (value) {
  // do something
  console.log(value);
});
const ul = document.querySelector(`.people`);
const people = ["Alice", "Bob", "Charlie", "Diana", "Edward"];
const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);

let html = ``;
people.forEach((person) => {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

ul.innerHTML = html;
