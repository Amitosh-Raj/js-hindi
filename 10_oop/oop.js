//Object literal
const user = {
    username: "Amitosh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()
//This new keyword is a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this;
}

const userOne = new User("Amitosh", 12, true)
const userTwo = new User("Raj", 11, false) // value override so we use new keyword
console.log(userOne.constructor);
//console.log(userTwo);



