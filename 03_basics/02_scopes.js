var c = 300
let a = 100
if(true)
{
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
}


// console.log(a);
//console.log(b);
//console.log(c);


function one()
{
    const username = "Amitosh"

    function two()
    {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if(true)
{
    const username = "Amitosh"
    if(username == "Amitosh")
    {
        const website = " youtube"
        //console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++ Intresting +++++++++

console.log(addone(5));
function addone(num)
{
    return num+1
}

addTwo(5)
const addTwo = function(num)
{
    return num+2
}
