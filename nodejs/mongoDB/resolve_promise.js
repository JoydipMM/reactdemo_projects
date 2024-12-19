const dbConnect = require('./mongoDB');


// fetch data with promise type 01 ----------------------------------
// dbConnect() return a promise. So we use then function
dbConnect().then((resp)=>{
    // toArray() also return a promise. So we use then function again
    //console.log(resp.find().toArray())
    resp.find().toArray().then((data)=>{
        console.log(data);
    });
})

return;

// fetch data with promise type 02 ----------------------------------
const fetchData = async () => {
    //console.log("fetchData started");
    let data = await dbConnect();
    //console.log(data.find().toArray())
    data = await data.find().toArray(); // return a promise 
    console.log(data) 
}

fetchData()