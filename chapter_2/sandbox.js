// alert("hello, world");
 console.log("1");
 console.log("2");

let age = 25;
let year = 2024
console.log(age, year);

age = 30;
console.log(age, year);

const points = 100;
// points = 50 // errors because cant over write const value
console.log(points)

var score = 75; // older way but still works
console.log(score)


// strings
console.log("hello, world");

let email = "mario@email.com";
console.log(email);

// string concatenation
let firstName = "Brent";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;

console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length); // note the space is included as a char to the length

// string methods (same as function)
// to Upper is a method so needs a ()
console.log(fullName.toLocaleUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result)

let index = email.indexOf("@"); // store the place of that symbol in a number
console.log(index);

// common string methods
email = 'mario@gmail.com';

result = email.lastIndexOf('m');

  result = email.slice(0,10) // slice it out of the string, from 0 to 10 (or from 3 to 10)

 result = email.substr(4,10) // will take starting at 4 and next 10

result = email.replace("m", "w"); // only replaces first instanve not all
 result = email.replace(/m/g, "w"); // replaces all (g means global)

console.log(result);

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

console.log(10/2);
 result = radius % 3; // give remainder
result = pi * radius**2;

 result = 5 * (10-3)**2;
console.log(result);

let likes = 10;
likes = likes + 1;
likes++;
likes--;
likes += 10; // plus 10
likes -= 10;
likes *= 2;
likes /= 2;
console.log(likes);

// Nan - not a number
console.log(5 / "hello");

result = "the blog has " + likes + " likes";

console.log(result);

// template strings
const title = "best reads of 2019";
const author = "mario";
const likes2 = 30;

// concatination way
result = "the boock called " + title + ' by ' + author + " has " + likes + " likes";
console.log(result);

// template string way
result = `The block called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);

// arrays
let ninjas = ['saun', 'ryn', 'chun-li'];
ninjas[1] = "ken"
console.log(ninjas[1]);

let ages = [20,25,30];
console.log(ages[2]);

let random = ['sean', 'crysta', 30 ,20];
console.log(random);

console.log(ninjas.length)

console.log(ninjas) // prints the array as an array
result = ninjas.join(',')
console.log(result) // prints as string
result = ninjas.join('-')
console.log(result)

result = ninjas.indexOf('chun-li');
console.log(result);

result = ninjas.concat(["ken", 'crystal']); // add to end
console.log(result);

result = ninjas.push('tocat');
console.log(result); // The result variable will contain the new length of the ninjas array after the element 'tocat' is pushed into it. It won't contain the array itself.
console.log(ninjas); // tocat added showing push edits orignal, but the concat did not edit orignal

result = ninjas.pop(); // take off end value
console.log(ninjas);