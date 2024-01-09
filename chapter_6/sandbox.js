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
