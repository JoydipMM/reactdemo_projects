const express = require('express');
const app = express();



// http route match with only get method
app.get("/user", (req, res) => {
    console.log(req.query);
    // url example: 
    // req.query ==> user?userid=101 -> this is query string
    // http://localhost:3001/user?userid=101  [Object: null prototype] { userid: '101' }
    // http://localhost:3001/user?userid=101&srno=123 [Object: null prototype] { userid: '101', srno: '123' }
    res.send({firstname: "Akshey", lastname: "Sharma"});
})


app.get("/user/:userid/:srno", (req, res) => {
    console.log(req.params);
    // req.params of /user/:userid/ ==> http://localhost:3001/user/20  [Object: null prototype] { userid: '20' }
    // req.params.userid ==> http://localhost:3001/user/20  [Object: null prototype] 20
    // req.params of /user/:userid/:srno ==> http://localhost:3001/user/20/30  [Object: null prototype] { userid: '20', srno: '340' }
    // Note: colon ":" means : is a parameter and ? means : is a query string
    res.send({firstname: "Akshey", lastname: "Sharma"});
})



app.get(/.*fly$/, (req, res) => {
    // url example: 
    // http://localhost:3001/testfly
    // http://localhost:3001/fly
    // http://localhost:3001/testfly1 give error
    res.send("/.*fly$/ - regex route match with only fly word or start with any character and end with fly at the end and of the url with get method");
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