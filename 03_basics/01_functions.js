function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("I");
}

//sayMyName()

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2)
{
    let result = number1 + number2
    return result
    //console.log("Amitosh");  //doen not print
    
}
const result = addTwoNumbers(3, 8)
//console.log("Result: ", result);


function loginUserMessage(username = "sam")
{
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Amitosh"));
//console.log(loginUserMessage(""));

function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Amitosh",
    prices: 199
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"sam",
    price: 399
})


const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getarray)
{
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));
