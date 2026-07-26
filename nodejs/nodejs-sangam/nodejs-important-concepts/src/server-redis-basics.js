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

        await redisClient.set("key", "redis"); // set key and value in redis server. This key help to store data in redis server
        const extractKeyValue = await redisClient.get("key"); // get key value from redis server
        console.log( extractKeyValue ); // Result: "redis"

        const deleteCount = await redisClient.del("key"); // delete key from redis server
        console.log( deleteCount ); // Result: 1 (One key deleted)

        const updatedKey = await redisClient.get("key"); // get key value from redis server
        console.log( updatedKey ); // Result: null

        const keyExists = await redisClient.exists("key"); // check if key exists in redis server
        console.log( keyExists ); // Result: false

        await redisClient.set("count", "100"); // count key value in redis server
        const increamentCount = await redisClient.incr("count"); // count key value in redis server
        console.log( increamentCount ); // Result: 101

        const decrementCount = await redisClient.decr("count"); // decrement key value in redis server
        console.log( decrementCount ); // Result: 100

        await redisClient.decr("count");
        await redisClient.decr("count");
        await redisClient.decr("count");
        await redisClient.decr("count");
        await redisClient.decr("count");
        console.log(await redisClient.get("count")); // Result: 95



    }catch(err){
        console.error(err); // log the error
    }finally{
        await redisClient.quit(); // close the connection. This will make sure that there will be not open redis connection
    }
}

// 05. Invoke the function
testConnectionRedis();


// redisClient.connect().then(() => {
//     console.log("Redis Client connected");
// });