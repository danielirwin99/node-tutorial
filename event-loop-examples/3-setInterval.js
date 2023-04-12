setInterval(() => {
    console.log("Hello World")
}, 2000);
console.log("I will run first")
// Process stays alive unless
// - Kill Process CTRL + C
// - Unexpected Error
// ---------------------------
// setInterval is also asynchronous 
