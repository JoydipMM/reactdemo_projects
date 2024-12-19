const {MongoClient} = require('mongodb');
const mongourl = 'mongodb://localhost:27017';
const client= new MongoClient(mongourl);

async function dbConnect ()
{
    // connect with mongodb
    let result = await client.connect();
    // connect with database
    let db = result.db('nodejsDB');
    // select collection
    return db.collection('collection01');
    // handle promise
}

module.exports = dbConnect