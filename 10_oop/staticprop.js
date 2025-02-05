class User {
    constructor(username)
    {
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    createId()
    {
        return `123`
    }
}

const amitosh = new User("Amitosh")
//console.log(amitosh.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
