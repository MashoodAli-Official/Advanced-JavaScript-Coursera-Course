// setTimeout
// setTimeout is an built-in function in JavaScript that allows you to execute a function after a specified delay (in milliseconds).

// Syntax:
//setTimeout(function(){function parameters}, delayInMilliseconds);

// 1st Example: Basic Usage
console.log("Example 1: Basic Usage");
setTimeout(function(){console.log("This message will be printed after 3 seconds");}, 3000);

// 2nd Example: Using Arrow Function
console.log("Example 2: Using Arrow Function");
setTimeout(() =>{
    console.log("This message will be printed after 4 seconds");
}, 4000)