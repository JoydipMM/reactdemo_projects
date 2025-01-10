const EventEmitter = require('events');
/*const myEmitter = new EventEmitter();

// Register an event listener for 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice');*/

class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = "Hello"
    }

    greet(name){
        this.emit('greeting', `${this.greeting} ${name}` )
    }
} 

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on('greeting', (input)=>{
    console.log("greeting event", input);
});

myCustomEmitter.greet("Alice");
