const productCollection = require('./mongo_connection_practise');


const deleteData = async () => {
    console.log("detele working");
    let collection = await productCollection();
    const deleteData = await collection.deleteOne({ name: "wwwwwww33333" });
    console.log(deleteData);

    if(deleteData.acknowledged && deleteData.deletedCount == 1){
        console.log("data delete successfully");
    }else{
        console.log("data not found");
    }
}


deleteData();