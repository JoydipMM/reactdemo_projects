// create middleware
module.exports = routeMiddleware = (req, resp, next) => {
    console.log("middleware start working");

    if(!req.query.age){
        resp.send("<h2>Please Provide Age</h2>")
    }else if(req.query.age < 18){
        resp.send("<h2>You are not eligible</h2>")
    }else{
        next();
    }

}