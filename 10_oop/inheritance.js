class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const chai = new Teacher("amitosh", "amitoshraj911@gmail.com", "123")

chai.logMe()

const masalaChai = new User("Amitosh")
masalaChai.logMe();

console.log(chai === masalaChai);
