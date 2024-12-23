const dbConnect = require('./mongoDB');


const update = async () => {

    console.log("update function working");
    // db connection
    const db = await dbConnect();
    console.log(db);
    let updateData = await db.updateOne(
        {name: "Jubin"},
        { $set:{ name: "Jubin 2" } }
    )

    if(updateData.acknowledged){
        console.log(updateData)
    }

}


update();