const dbConnect = require('./mongoDB');


const insert = async () => {
    console.log("insert function working");
    // db connection
    const db = await dbConnect();
    console.log(db);

    // insert one data
    // const insertData = await db.insertOne(
    //     { name: "Ashim", email: "ashim@gmail.com" }
    // );
    // insert many data
    const insertData = await db.insertMany([
        { name: "Sudip", email: "sudip@gmail.com" },
        { name: "Ashim", email: "ashim@gmail.com" }
    ]);
    // console.log(insertData);

    if(insertData.acknowledged){
        console.log("data inserted");
    }
}

insert();