//singleton
// Object.create

//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Amitosh",
    "full name": "Amitosh Raj",
    [mySym]: "mykey1",
    age: 20,
    location: "Bihar",
    email: "amitoshraj911@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); // cant access with dot
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "amitosh.raj2021@vitstudent.ac.in"
//Object.freeze(jsUser)
jsUser.email = "sujalsinha231@gmail.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingtwo = function(){
    console.log(`Hello js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
