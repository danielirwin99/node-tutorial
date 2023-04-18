const http = require("http");

const server = http.createServer();

// Same as the event emitter in part 13
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
