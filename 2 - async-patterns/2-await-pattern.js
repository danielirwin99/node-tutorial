const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// DONT USE!!
// ----------------------------------------------------------
// This is the same as require("fs").promises --> Pass in the readFile and writeFile instead inside your function
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// ----------------------------------------------------------

// Executing with async await approach
const start = async () => {
  try {
    // These two are pulled from the util module above
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    // Creates a file in the directory chosen (first parameter), Second parameter is what you want inside the new file/overwritten file
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first}, ${second}`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

// ---------------------------------------------------------------

// MORE COMPLEX / NON ASYNC WAY ---> DON'T USE!!!

// Passing in the path with is the same as "./content/first.txt"
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      // Reject with an error if it goes bad with the promise
      if (err) {
        reject(err);
        // Resolve with the data if its all good
      } else {
        resolve(data);
      }
    });
  });
};

// Executing the Promise from above
getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
