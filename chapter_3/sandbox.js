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
if(age > 20){
  console.log('you are OVER 20')
}

const ninjas = ["sean", "merio", "luigus", "blanke"]

if (ninjas.length > 3){
  console.log("That's a lot of ninjas");
}

const password = 'pas@5'
if(password.length >= 12 && password.includes('@')){
  console.log("That password is strong");
}
else if(password.length >= 8 || password.includes('@') && password.length >5){
  console.log('that password is good enough');
}else {
  console.log("password not long enough")
}

//logial NOT
let user
= false;

if(!user){
console.log("You must be logged in")
}

// Break and continue
