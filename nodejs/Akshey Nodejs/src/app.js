const express = require('express');
const connectDB = require('./config/database')
const userModel = require('./models/user')
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


// dummy error handling
app.get("/getUserData", (req, res) => {
    // making a dummy error
    throw new Error("Dummy Error");
    // response: <pre>Error: Dummy Error<br> &nbsp; &nbsp;at .....

    // if we use use error handling [comment: error handling 01] then we get the response like below:
    // Something went wrong!!!
})


// error handling 02
app.get("/trycatch", (req, res) => {
    try {
        throw new Error("Dummy Error !!!");
        res.send("Dummy Error");
    } catch (error) {
        res.status(500).send(error.message);
    }
    // response: Dummy Error !!!
})


// if any rotue have any error this route handed all error app.use("/", (req, res) => {}) match all type type of http methods
/*
---------------------------------
Note: 
--------------------------------- 
parameter order is important.
if we use error as a parameter then err will be the first parameter
for 2 parameter ==> (req, res) => {})
for 3 parameter ==> (req, res, next) => {})
for 4 parameter ==> (err, req, res, next) => {})
*/

// error handling 01 [wildcard error handling]
app.use("/", (err, req, res, next) => {
    if(err){
        res.status(500).send("Something went wrong!!!");
    }
})




app.get("/user/:userid/:srno", (req, res) => {
    console.log(req.params);
    // req.params of /user/:userid/ ==> http://localhost:3001/user/20  [Object: null prototype] { userid: '20' }
    // req.params.userid ==> http://localhost:3001/user/20  [Object: null prototype] 20
    // req.params of /user/:userid/:srno ==> http://localhost:3001/user/20/30  [Object: null prototype] { userid: '20', srno: '340' }
    /* 
    ---------------------------------
    Note: 
    ---------------------------------  
    colon ":" means : is a parameter and ? means : is a query string
    */
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


app.use("/middleware", (req, res)=>{
    //res.send("Middleware App Page");
    // if we do not send any response then postman continue finding the response for some time period then it will timeout error message.
});


app.use("/middleware02", (req, res, next)=>{
    // res.send("Middleware 02 App Page");
    // if we do not send any response then postman continue finding the response for some time period then it will timeout error message.

    next(); // this is the third argument of route handler
    // next is use when we want to go to next route handler to bypass the current route handler if there did not pass any response. then it will work. 
    // But if we send any response then it will not go to next route handler. it will give Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client in console. Because we send the response in the first route handler already.

    res.send("Middleware 02 App Page");
    // if we send any respone will call after next() then it will go to second route handler. But also it will give Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

    // why this is error?
    /*
    JavaScript execute code line by line, so when javaScript come to next() line then it execute the second request handler and send the response of second request handler. after execute the second request handler then javaScript come to res.send("Middleware 02 App Page"); of the first request handler, at this time javaScript already send the response of second request handler, that is why javaScript give error.
    */
},
(req, res)=>{ 
    res.send("Middleware 02 App Page 02");
});


app.use("/middleware03", (req, res, next)=>{
    next(); 
},
(req, res, next)=>{ 
    next(); 
});
// response: <pre>Cannot GET /middleware03</pre>
// this error because the second route handler expecting third request handler but third request handler not found.



app.use("/middleware04", (req, res, next)=>{
    next(); 
},
(req, res, next)=>{ 
    // if we dont send any response  or next() then postman continue finding the response for some time period then it will timeout error message.
});

app.use("/middleware05", [(req, res, next)=>{
    console.log("Middleware 05 App Page 01");
    next(); 
},
(req, res, next)=>{ 
    console.log("Middleware 05 App Page 02");
    next(); 
},
(req, res, next)=>{ 
    console.log("Middleware 05 App Page 03");
    next(); 
},
(req, res, next)=>{ 
    console.log("Middleware 05 App Page 04");
    res.send("Middleware 05 App Page 04");
}]);
// response: 
// Middleware 05 App Page 04


app.use("/middleware06", [(req, res, next)=>{
    console.log("Middleware 06 App Page 01");
    next(); 
},
(req, res, next)=>{ 
    console.log("Middleware 06 App Page 02");
    next(); 
},
(req, res, next)=>{ 
    console.log("Middleware 06 App Page 03");
    next(); 
}],
(req, res, next)=>{ 
    console.log("Middleware 06 App Page 04");
    res.send("Middleware 06 App Page 04");
});
// response: 
// Middleware 06 App Page 04

/*---------------------------------
Note: 
--------------------------------- */
// if we look from the above example the last callback function is route handler because it is send the response. 
// and remaining callback functions above the last one are known as middlewares.


// app.all() // need to learn


// with use method we will handle all type of http methods (post, get, put, patch, delete)
app.use("/admin", (req, res, next) =>{
    const token = "demo";
    const isAuthenticated = token === "demo";
    if(!isAuthenticated){
        res.status(401).send("Unauthorized");
    }else{
        next();
    }
})


/*
    ---------------------------------
    Note: 
    ---------------------------------  
    we can put this middleware callback function in another file and import it. 

    import {adminMiddleware} from "./middleware/admin.middleware"; at the top of app.js if we use module export
    // or
    const {adminMiddleware} = require("./middleware/admin.middleware"); at the top of app.js if we use require for normal export

    // then we can use this middleware in admin routes
    // use like below:
    app.use("/admin", adminMiddleware);

    //or we do like below:
    app.get("/admin/profile", adminMiddleware, (req, res)=>{
        res.send("Admin Profile Page");
    });
    
*/


app.get("/admin/dashboard", (req, res)=>{
    // if we want to authentication then we can do that.
    // let we make demo token for authentication.
    
    /*
        // individual route handler authentication. this authentication is work for this route handler only
        const token = "demo";
        const isAuthenticated = token === "demo";
        if(isAuthenticated){
            res.send("Admin Dashboard Page");
        }else{
            res.status(401).send("Unauthorized");
        }
    */
    // above condition will go to top middleware and check the token is valid or not.
    res.send("Admin Dashboard Page");
});

app.get("/admin/profile", (req, res)=>{
    // Note:---------------------------
    // if we want to authentication then we need to do above one again. But this is a repeated code. so we can use middleware. this will add above of all admin routes
    res.send("Admin Profile Page");
});

app.get("/admin/report", (req, res)=>{
    // Note:---------------------------
    // if we want to authentication then we need to do above one again. But this is a repeated code. so we can use middleware. this will add above of all admin routes
    res.send("Admin Report Page");
});

// below code is for signup api: http://localhost:3001/signup
app.post("/signup", async (req, res)=>{
    const dummyuserObj = {
        name: "raj",
        email: "tYt2F@example.com",
        password: "1234"
    }
    
    // to save the dummydata user collection we need to make a new instance of user model
    // first inport user model at the top
    // create new instance of user model and pass the data info
    const user = new userModel(dummyuserObj);

    // to save data we use try catch block
    try{
        // save data to db. this save method is return promise add await before user.save() and add async before router handler
        await user.save()
        // at last send the response
        res.send({message: "user created successfully", user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
    
});



/*
---------------------------------
Note: 
--------------------------------- 
"/user" -> this route
(req, res) => { res.send("save data to db");  } -> this is known as route handler
but one route has multiple route handler.
example:
app.use("/middleware", (req, res)=>{ 
    res.send("Middleware App Page");
},
(req, res)=>{ 
    res.send("Middleware App Page 02");
});

*/


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


connectDB().then(()=>{
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}).catch((error)=>{
    console.log(error);
})

