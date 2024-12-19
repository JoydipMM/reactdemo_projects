const {MongoClient} = require('mongodb');
const mongourl = 'mongodb://localhost:27017';
const client= new MongoClient(mongourl);

async function getData ()
{
    // connect with mongodb
    let result = await client.connect();
    // connect with database
    let db = result.db('nodejsDB');
    // select collection
    let collection = db.collection('collection01');
    // handle promise
    let response = await collection.find({}).toArray();
    console.log(response);
}


getData();