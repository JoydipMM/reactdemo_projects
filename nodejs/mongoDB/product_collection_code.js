const {MongoClient} = require('mongodb');
const mongourl = "mongodb://localhost:27017/";
const client = new MongoClient(mongourl);

async function dbconnection (){
    //connect with mongodb
    let connection = await client.connect();
    // db connection
    return connection.db('demoDB_01');
}

const productCollection = async () =>{
    // db connection
    let db = await dbconnection();
    // select collection name
    return db.collection('products');
}


const productData = async () => {
    // collection conect
    let productData = await productCollection();
    // fetch coollection data
    productData = await productData.find().toArray();
    console.log(productData);
}

productData();

