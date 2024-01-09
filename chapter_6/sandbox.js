// grab first p
let para = document.querySelector("p"); // grabbs first p tag ignores rest
console.log(para);

// grab first error class
para = document.querySelector(".error"); // grabbs class error
console.log(para);

// grab second error
para = document.querySelector("div.error"); // grabbs class error
console.log(para);

// remember you can (below) if you dont know how to access that element
// inspect > copy > copy selector

para = document.querySelector("body > div.error"); // grabs the error that is a div with class error
console.log(para);

// grab multiple
para = document.querySelectorAll("p"); // grab all the p tags
console.log(para); // node list NOT an array

console.log(para[0]);

// can use a for each loop to cycle though them
para.forEach((para) => {
  console.log(para);
});

// get an element by id (reminder only one id per page, not reused like a class)
const title = document.getElementById("page-title");
console.log(title);

// get element by class name
const errors = document.getElementsByClassName("error");
console.log(errors); // HTML collection

console.log(errors[0]); // works

// // will not work.
// errors.forEach((error) => {
//   console.log(error);
// });

// get elements by their tag name
const paras = document.getElementsByTagName("p");
console.log(" ");
console.log(paras);
console.log(paras[1]);

// change text in elemtnsts
console.log("change text in elemtnsts ");

const pTag = document.querySelector("p");
console.log(pTag.innerText);

// override text
pTag.innerText = "ninjas are awesome";
console.log(pTag.innerText);
// append to text
pTag.innerText += " but I guess you knew that";
console.log(pTag.innerText);

// select all tags to change at once
console.log(" ");

const pTags = document.querySelectorAll("p");
pTags.forEach((pTag) => {
  pTag.innerText += " new text";
  console.log(pTag.innerText);
});

// change conent of a class
const content = document.querySelector(".content");
content.innerHTML += "<h2> TH IS IS A NEW H2</h2>";

// append to the p tags
const people = ["mario", "lougi", "peach"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector("a");
console.log(link.getAttribute("href")); // get the arriribute (html attribute to be specific)
link.setAttribute("href", "https://www.rrc.ca"); // replace and set it with this value
link.innerText = "Changed link text";

const mssg = document.querySelector;
