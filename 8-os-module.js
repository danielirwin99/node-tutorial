// Looking for the built in module 'os'
const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// More Information about your system
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOs)
