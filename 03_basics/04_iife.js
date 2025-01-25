// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();  // semicolon is necessary
// chai()

( (name) => {
    //UnNamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Amitosh')