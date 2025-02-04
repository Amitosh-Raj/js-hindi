// let myName = "Amitosh    "

// console.log(myName.trurLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.amitosh = function(){
    console.log(`amitosh is present in all objects`);
    
}

Array.prototype.heyAmitosh = function(){
    console.log("Amitosh says hello!");
    
}

// heroPower.amitosh()

myHeros.amitosh()
myHeros.heyAmitosh()
// heroPower.heyAmitosh()


// Inheritance

const User = {
    name: "Amitosh",
    email: "amitosh911@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TASupport = {
    makeAssingment: 'JS Assingment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "Raj     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"amitosh".trueLength()
"tea".trueLength()