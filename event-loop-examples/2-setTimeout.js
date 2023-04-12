// Started operating system process
console.log("first")
setTimeout(() => {
    console.log("second")
}, 0);
console.log("third")
// Completed and exited operating system process

// cl("second") Runs third because setTimeout is asynchronous --> They get offloaded (back of the line)