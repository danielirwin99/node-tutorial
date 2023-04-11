// Built in path module
const path = require("path");

// Finding our txt file inside our two folders
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath)

// If you just want the txt file
const base = path.basename(filePath)
console.log(base)

// Provides an absolute path
const absolute = path.resolve(__dirname, "content" , "subfolder", "text.txt")
console.log(absolute)