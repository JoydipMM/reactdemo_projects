const productCollection = require('./mongo_connection_practise');


const update = async() => {
    console.log("update working");
    let collection = await productCollection();
    //console.log(collection);

    let update = await collection.updateOne(
        {name: "eeeeeee33333"},
        {$set:{ name: "wwwwwww33333"}}
    );

    if(update.acknowledged){
        console.log("data update successfully");
    }
}

update();