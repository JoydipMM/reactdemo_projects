const express = require('express');
const app = express();

app.use('/hello/2', (req, res) => {
    res.send("hello 2 App Page");
});

app.use('/hello', (req, res) => {
    res.send("hello App Page");
});

app.use('/', (req, res) => {
    res.send("Home App Page !");
});

// http://localhost:3001/hello --> this will not goto hello app page. it will not change the route because in express routes are read form top. So at the last the "/" url will be and ather will be upon of this route. please follow the above route order.


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});