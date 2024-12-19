const dbConnect = require('./mongoDB');

// fetch data with promise type 02 ----------------------------------
const fetchData = async () => {
    //console.log("fetchData started");
    let data = await dbConnect();
    //console.log(data.find().toArray())
    data = await data.find().toArray(); // return a promise 
    console.log(data) 
}

fetchData();