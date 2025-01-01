const productCollection = require('./mongo_connection_practise');

const insert = async () => {
    console.log("insert");
    const collection = await productCollection();
    console.log(collection);

    const insertdata = await collection.insertOne(
        { name: "eeeeeee33333", email: "eeeeeee@gmail.com" }
    );

    //console.log(insertdata);
    if(insertdata.acknowledged){
        console.log("data inserted")
    }
}

insert()