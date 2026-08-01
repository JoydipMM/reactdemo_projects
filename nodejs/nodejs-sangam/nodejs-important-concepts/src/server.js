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

        // pub/sub -----------------------

        // 01. we create a duplicate client for subscriber
        const subscriber = redisClient.duplicate();

        // 02. connect redis server for subscriber
        await subscriber.connect();

        // 03. to subscribe to a channel, we can use the subscribe method of the subscriber client. The subscribe method takes two arguments: the name of the channel and a callback function that will be called whenever a message is published to that channel. The callback function takes two arguments: the name of the channel and the message that was published.
        // syntax: await subscriber.subscribe("channel-name", (channel, message) => {});
        await subscriber.subscribe("news-channel", (message, channel) =>{
            console.log(`Received message from ${channel}: ${message}`);
        })


        // 04. publish a message to the channel using the publish method of the redis client. The publish method takes two arguments: the name of the channel and the message to be published.
        // syntax: await redisClient.publish("channel-name", "message");
        await redisClient.publish("news-channel", "Hello, this is a test message from the publisher!"); 
        await redisClient.publish("news-channel", "This is another test message from the publisher!"); 


        // 05. we need to wait for a few seconds to make sure that the subscriber has received the messages before we close the connection. We can use setTimeout to wait for a few seconds.
        setTimeout(async () => {
            await subscriber.unsubscribe("news-channel"); // unsubscribe from the channel
            await subscriber.quit(); // close the connection for subscriber
            console.log("Subscriber disconnected");
        }, 5000);

        // Result:
        /*
        Redis Client connected
        Received message from news-channel: Hello, this is a test message from the publisher!
        Received message from news-channel: This is another test message from the publisher!
        Subscriber disconnected
        */



    }catch(err){
        console.error(err); // log the error
    }finally{
        await redisClient.quit(); // close the connection. This will make sure that there will be not open redis connection
    }
}

// 05. Invoke the function
testConnectionRedis();