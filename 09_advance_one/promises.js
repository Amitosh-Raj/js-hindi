//First Example of Promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB Calls, Cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // It helps to connectthe resolve func. with then func.
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

//2nd example of promise, without store in any variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved");
    
})

//3rd example of promise, we can also use parameters inside the resolve func.
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Amitosh", email: "amitoshraj911@gmail.com"})
        // we can also give some parameters inside the resolve function and then connect it with then function
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


//4th example of promise, explain about chaning promise and also explain about reject function
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; //true
        if(!error)
        {
            resolve({username: "Amitosh", password: "Amitosh@123"})
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The Promise is either resolved or rejected")
)


//5th example of promise, alternative way of then is async function is used and also try and catch method is explained
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; //true
        if(!error)
        {
            resolve({username: "Rishu", password: "1234567"})
        }
        else
        {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
    
// }
// getAllUsers()

// now try .then and .catch method


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))
