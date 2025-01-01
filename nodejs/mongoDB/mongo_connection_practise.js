const {MongoClient} = require("mongodb");
const mongodburl = "mongodb://localhost:27017/";
const client = new MongoClient(mongodburl);

async function dbconnection (){
    let connection = await client.connect();
    //console.log(connection);
    return connection.db("nodejsDB");
}

//dbconnection();

async function productCollection (){
    let connection = await dbconnection();
    //console.log(connection);
    return connection.collection("collection01");
}

// productCollection();


async function fetchProductData(){
    let collection = await productCollection()
    //console.log(collection)
    let data = await collection.find({}).toArray();
    console.log(data);
}

// fetchProductData();
module.exports = dbconnection
module.exports = productCollection