const EventEmitter = require("events");

const customerEmitter = new EventEmitter();

// response --> Name of the event
// Call back is what we want to do with the event
customerEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customerEmitter.on("response", () => {
  console.log(`some other logic here `);
});

// String name must be the same as the event above
// 2nd and 3rd parameters are the ones passed from the -on- emitter above -->  (name, id)
customerEmitter.emit("response", "john", 34);
