// Long version
const fs = require("fs");
fs.readFileSync();

// Shortened Version
const { readFileSync, writeFileSync } = require("fs");

// Reads the files that we find
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// Writes a file --> If there is no file there (creates one), IF there is one --> It will overrite all the values
// ----------------------------------
// First part is the directory, second string is what you want to write inside the file
// ----------------------------------
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);

// ---------------------------------------------------------------------

const { readFile, writeFile } = require("fs");

// The utf8 turns it into readable text
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

