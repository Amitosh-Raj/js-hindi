// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

//const bignumber = 8383232948732949n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Amitosh",
    age: 22,
}


const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherid);



// +++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Amitosh"

let anothername = myYoutubename
anothername = "Raj"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "amitoshraj911@gmail.com",
    upi: "amitosh@bxl"
}

let userTwo = userOne

userTwo.email = "amitosh.raj2021@vitstudent.ac.in"

console.log(userOne.email);
console.log(userTwo.email);
