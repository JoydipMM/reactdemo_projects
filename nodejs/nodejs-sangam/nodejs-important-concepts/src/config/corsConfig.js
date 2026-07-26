const cors = require("cors");

const configureCors = () => {
    return cors({
        // origin tell which origin we want to user can access this api
        origin: (origin, callback) => {
            const allowedOrigins = [
                "http://localhost:3000",
            ]

            //if(!origin || allowedOrigins.indexOf(origin) !== -1) {
            if(!origin || allowedOrigins.includes(origin)) { // recent developers use includes. it's more expressive.
                callback(null, true) // permission is allowed
            } else {
                callback(new Error("Not allowed by CORS"))
            }
        },

        methods: ["GET", "POST", "PUT", "DELETE"],

        allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],

        exposedHeaders: ["X-Total-Count", "Content-Range"], // this header will expose the headers to client in the response

        credentials: true, // this will allow client to send cookie

        preflightContinue: false, // false in default. false will not allow any preflight request

        maxAge: 600, // in seconds means 10 minutes. this will cache the preflight responses for 10 mins. sending avoid options request multiple times

        optionSuccessStatus: 204,  // this will return status code 204 for successfull options request 
    })
}

module.exports = configureCors