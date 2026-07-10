// 01. import the event emitter class 
const eventEmitter = require("events");

// 02. create a new event emitter instance
const myFirstEmitter = new eventEmitter();

// 03. Register a listener for the event
myFirstEmitter.on("firstEmittedEvent", () => {
    console.log("event emitted");
});

// 04. Emit the event
myFirstEmitter.emit("firstEmittedEvent");