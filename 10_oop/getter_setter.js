class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shipra`
    }

    set password(value){
        this._password = value
    }
    
}

const amitosh = new User("amitoshraj911@gmail.com", "amitosh@123")
console.log(amitosh.email);

console.log((amitosh.password));
