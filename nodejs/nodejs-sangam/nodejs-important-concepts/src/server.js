// 01. Import redis modules
const redis = require("redis");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 3000;

// 02. Create redis client help to interact with redis server
const redisClient = redis.createClient({
    // this host and port required for redis 5 or older version
    host: "localhost", // for now redis server hosted on localhost
    port: 6379, // redis server default port
});

// 03. create error handler for redis
redisClient.on("error", (err) => 
    console.log("Redis Client Error", err)
);

// 04. establish connection
async function testConnectionRedis (){
    try{
        await redisClient.connect(); // connect to redis
        console.log("Redis Client connected");

        // SET and GET
        await redisClient.set("user:name", "Dipen");
        await redisClient.set("user:age", "30");
        console.log(await redisClient.get("user:name")); // Result: "Dipen"
        console.log(await redisClient.get("user:age")); // Result: "30"

        // MSET and MGET
        await redisClient.mSet([
            "muser:email", "dipen@gmail.com",
            "muser:phone", "1234567890",
            "muser:age", "26"
        ]);
        
        const [email, phone, age] = await redisClient.mGet(["muser:email", "muser:phone", "muser:age"]);
        console.log(email, phone, age); // Result: "dipen@gmail.com" "1234567890" "26"



    }catch(err){
        console.error(err); // log the error
    }finally{
        await redisClient.quit(); // close the connection. This will make sure that there will be not open redis connection
    }
}

// 05. Invoke the function
testConnectionRedis();