require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./database/db");
const bookRouter = require("./routes/book-route");
const authRouter = require("./routes/auth-route");
const homeRouter = require("./routes/home-route");
const adminRouter = require("./routes/admin-route");
const imageRouter = require("./routes/image-route");
const PORT = process.env.PORT || 4000;

const ejs = require('ejs');

// import socket io and http
const http = require('http');
const scoketio = require('socket.io');


// connect DB
connectDB();

// middleware
app.use(express.json());
app.set('view engine', 'ejs');


app.use("/api/books", bookRouter);
app.use("/api/auth", authRouter);
app.use("/api/home", homeRouter);
app.use("/api/admin", adminRouter);
app.use("/api/images", imageRouter);

// create http server for socket
const server = http.createServer(app);
// initiate socket io and attach this to http server
const io = scoketio(server); // inintialize socket io

//app.use(experess.static(__dirname + "/public"));
app.use(express.static("public")); // this will access the static file from public folder

// we need to store the user in some place who enter in the chat application.
const users = new Set();

// Create Connection:  when client establish socket connection with the server. So when connection event is fire then the scoket object is created.
// so need to listen the scoket connection
io.on("connection", (socket)=>{
    console.log("new connection");

    // handle the users when they will join the chat
    socket.on("join", (username)=>{
        // we need to store the user in scoket object
        socket.username = username;
        users.add(username); // add joined user to the set from client site
        //console.log(`${username} joined the chat`);

        // boradcast to all users that new user joined from server site
        io.emit("userJoined", username);

        // send the updated userlist to the client site
        io.emit("usersList", Array.from(users)); // Array.from(users) --> users = const users = new Set();
    })

    // handle incoming chat messages
    // listen the client chat message
    socket.on("chatMessage", ({user, msg})=>{
        // boradcast to all users the chat message
        io.emit("chatMessage", {user, msg});
    })

    // handle user disconnection
    socket.on("disconnect", ()=>{
        // users.delete(socket.id);
        // io.emit("userLeft", socket.id);
        // io.emit("usersList", Array.from(users));
        console.log("An user disconnected");
        users.forEach((user) => {
            if(user === socket.username){
                users.delete(user);
                io.emit("userLeft", user);
                io.emit("usersList", Array.from(users));
            }
        });
        
    })
})

server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})

/*

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})
*/