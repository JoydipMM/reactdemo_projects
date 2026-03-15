const adminMiddleware = (req, res, next) =>{
    const token = "demo";
    const isAuthenticated = token === "demo";
    if(!isAuthenticated){
        res.status(401).send("Unauthorized");
    }else{
        next();
    }
}

module.exports ={
    adminMiddleware
}