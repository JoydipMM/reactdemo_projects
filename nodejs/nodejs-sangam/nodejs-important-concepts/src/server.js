// 01. Import ioredis modules
const RedisIO = require("ioredis");

// 02. Create redis client help to interact with redis server
const redisClient = new RedisIO();

// 03. create error handler for redis
redisClient.on("error", (err) => 
    console.log("Redis Client Error", err)
);

async function ioRedisExample (){
    try{
        await redisClient.set("r-key-1", "r-value-1");
        const value = await redisClient.get("r-key-1");
        console.log("Value from Redis:", value); // Output: Value from Redis: r-value-1
    }catch(err){
        console.error(err); // log the error
    }finally{
        await redisClient.quit(); // close the connection. This will make sure that there will be not open redis connection
    }
}

ioRedisExample();
