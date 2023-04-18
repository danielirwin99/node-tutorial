const http = require("http");

// The event loop is waiting for the requests to come in
const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

// Asynchronous
// The callback is when we are setting up the server
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
