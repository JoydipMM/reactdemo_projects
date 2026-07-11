// 01. import the event emitter class 
const eventEmitter = require("events");

// 02. create a new event emitter instance
const myFirstEmitter = new eventEmitter();

// 03. Register a listener for the event
myFirstEmitter.on("firstEmittedEvent", (data) => {
    console.log("event emitted", data);
});

// 04. Emit the event
//myFirstEmitter.emit("firstEmittedEvent", "passing the data");




// custom event emitter
class customEmitter extends eventEmitter{
    constructor(){
        super();
        this.greeting = "Hello";
    }

    // create a method will emit the event
    greet(name){
        this.emit('greeting', `${this.greeting} ${name}`);
    }
}

const myCustomEmitter = new customEmitter();

myCustomEmitter.on('greeting', (data) => {
    console.log(data);
});

//myCustomEmitter.greet("Rahul");






class Auth extends eventEmitter {
    login(username) {
        console.log(`${username} logged in`);

        this.emit("login", username);
    }

    logout(username) {
        console.log(`${username} logged out`);

        this.emit("logout", username);
    }
}

const auth = new Auth();

auth.on("login", (user) => {
    console.log(`Welcome ${user}`);
});

auth.on("logout", (user) => {
    console.log(`Goodbye ${user}`);
});

auth.login("Rahul");
/*
Rahul logged in
Welcome Rahul
*/
auth.logout("Rahul");
/*
Rahul logged out
Goodbye Rahul
*/



const authEventEmitter = new eventEmitter();

authEventEmitter.on("login", (user)=>{
    console.log(`${user} logged in`);
    console.log(`Welcome ${user}`);
})

authEventEmitter.on("logout", (user)=>{
    console.log(`${user} logged out`);
    console.log(`Goodbye ${user}`);
})

authEventEmitter.emit("login", "Raja");
authEventEmitter.emit("logout", "Raja");