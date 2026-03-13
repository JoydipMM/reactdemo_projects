const express = require('express');
const app = express();



// http route match with only get method
app.get("/user", (req, res) => {
    res.send({firstname: "Akshey", lastname: "Sharma"});
})

app.post("/user", (req, res) => {
    res.send("save data to db");
})


/*
app.use('/hello/2', (req, res) => {
    res.send("hello 2 App Page");
});

app.use('/hello', (req, res) => {
    res.send("hello App Page");
});

// this route will match with all http route method
app.use('/', (req, res) => {
    res.send("Home App Page !");
});
*/



// http://localhost:3001/hello --> this will not goto hello app page. it will not change the route because in express routes are read form top. So at the last the "/" url will be and ather will be upon of this route. please follow the above route order.
// also if any url not match then the root url page will open related page with "/" url.
// example: http://localhost:3001/hello/fgfdg%20fdgdf will open hello app page.
// if we remove the "/" then http://localhost:3001/xyz will show: Cannot GET /yyyy


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});