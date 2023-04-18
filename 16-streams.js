const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 9000,
  encoding: `utf8`,
});

stream.on("data", (result) => {
  console.log(result);
});
// Checking for an error
stream.on("error", (err) => console.log(err));

// By default the size of the buffer is 64kb
// Last buffer - remainder
// highWaterMarket - control size
