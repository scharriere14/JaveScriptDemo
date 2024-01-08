// object literals

let user = {
  // key value pair
  name: "crystal",
  age: 30,
  email: "crystal@gmail.com",
  location: "berlin",
  blogs: ["why mac and cheese rules", "top 10 list of cats"],
};

console.log(user);
console.log(user.name);

user.age = 35; // update user age using dot notation
console.log(user.age);

// also can access using square notation
console.log(user["name"]);
user["name"] = "Freddie"; // update user name using square notation
console.log(user["name"]);

// this confuses me, but putting the location saves that users location into that variable so you can call it using the variable but still need to use user[key] which is the same amount of code as user[locaton]
const key = "location";
console.log(user[key]);

console.log(typeof user); // type object

// Add a method named 'login' to the 'user' object
user.login = function () {
  // name of method is login, call it to use it
  console.log("user is logged in");
};

// Call the 'login' method
user.login();

const name = "mario";
name.toUpperCase();
console.log(name);

// add another function - can either edit orignal

// let user = {
//   // key value pair
//   name: "crystal",
//   age: 30,
//   email: "crystal@gmail.com",
//   location: "berlin",
//   blogs: ["why mac and cheese rules", "top 10 list of cats"],
//   login: function () {
//     console.log("the user logged in");
//   },
//   logout: function () {
//     console.log("the user has logged out");
//   },
// };

// or do what I did above to add
user.logout = function () {
  // name of method is login, call it to use it
  console.log("user is logged out");
};

user.logout();

// logBlogs:function(){} if doing it in the user while creating it

user.logBlogs = function () {
  console.log(this); // prints user information
  console.log(this.blogs); // prints out all the contents of blog array

  // print them out one at a time
  console.log("this user has written the following blogs: ");
  this.blogs.forEach((blog) => {
    console.log(blog);
  });
};

console.log(this); // prints this window (Window {window: Window, self: Window, document: document, name: '', location: Location, …)
user.logBlogs(); // call function

// continuing but making a new user to make further edits to preserve orignal examples

// const blogs = [
//   // put objectrs in array rather then string
//   // title is first element in the array
//   { title: "why mac and cheese rules", likes: 30 },
//   // seond element in array
//   {
//     title: "top 10 list of cats",
//     likes: 30,
//   },
// ];

// console.log(blogs);

let user2 = {
  // key value pair
  name: "crystal",
  age: 30,
  email: "crystal@gmail.com",
  location: "berlin",
  blogs: [
    { title: "why mac and cheese rules2", likes: 30 },
    {
      title: "top 10 list of cats2",
      likes: 80,
    },
  ],
  login: function () {
    console.log("the user logged in");
  },
  // can also make a function by not adding the word function
  //When defining a method within an object literal in JavaScript, you can omit the : function syntax and use a shorthand notation. This shorthand notation is especially convenient and more concise.
  logout() {
    console.log("the user has logged out");
  },

  logBlogs() {
    console.log("this user has written the following blogs: ");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};
user2.logBlogs(); // call function

// Math object
console.log(Math);
console.log(Math.PI);

const area = 7.2;
// round - rounds down
console.log(Math.round(area));

//rounds down
console.log(Math.floor(area));
//rounds up
console.log(Math.ceil(area));
//takes off the .2
console.log(Math.trunc(area));
// gnertes random number
console.log(Math.random());
console.log(Math.round(Math.random() * 100));

// primitive values example
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne} `, `scoreTwso: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne} `, `scoreTwso: ${scoreTwo}`);
// score one changes but score two does not , it made a copy of the info

// reference values - points same place
const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);
