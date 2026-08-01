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

        // Pipelining & Transactions -----------------------

        // 01. create a pipeline
        // const multiPipeline = redisClient.multi();
        
        // // 02. add commands to the pipeline
        // multiPipeline.set("name", "John Doe");
        // multiPipeline.set("age", "30");
        // multiPipeline.set("city", "New York");
        // multiPipeline.get("name");

        // // 03. execute the pipeline
        // const multiPipeLineExecuteResult = await multiPipeline.exec();
        // console.log("Pipeline executed successfully:", multiPipeLineExecuteResult);
        // // result: Pipeline executed successfully: [ 'OK', 'OK', 'OK', 'John Doe' ]


    }catch(err){
        console.error(err); // log the error
    }finally{
        await redisClient.quit(); // close the connection. This will make sure that there will be not open redis connection
    }
}

// 05. Invoke the function
testConnectionRedis();