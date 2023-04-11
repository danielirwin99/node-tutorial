const http = require("http");

// Create server has a callback
// The first parameter (req) represents the incoming request --> Image a client requesting from a web browser
// Second parameter (res) is what we are sending back
const server = http.createServer((req, res) => {
  // If the request url is equal to the home page
  if (req.url === "/") {
    // Sends this to the browser + Ends the request at the same time
    res.end("Welcome to the Home Page");
  }
  // Sends them to the about page if they direct to it
  if (req.url === "/about") {
    res.end("About Page");
  }
  // If the above two are not available (OUR ERROR PAGE)
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home </a>`);
});

// This is our local host(5000)
server.listen(5000);
