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

        // hSet, hGet, hGetAll, hDel
        await redisClient.hSet("product:1", {
            name: "Laptop",
            price: 1000,
            quantity: 10
        })
        const getProductSpeficData = await redisClient.hGet("product:1", "name");
        console.log(getProductSpeficData); // Result: "Laptop"

        getAllProductDetails = await redisClient.hGetAll("product:1");
        console.log(getAllProductDetails); // Result: { name: 'Laptop', price: '1000', quantity: '10' }


        await redisClient.hDel("product:1", "name");
        const updatedProductDetails = await redisClient.hGetAll("product:1");
        console.log(updatedProductDetails);



    }catch(err){
        console.error(err); // log the error
    }finally{
        await redisClient.quit(); // close the connection. This will make sure that there will be not open redis connection
    }
}

// 05. Invoke the function
testConnectionRedis();