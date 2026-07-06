const fs = require("fs");
const path = require("path");



function useraddress(){
    console.log("user address");
}

function person(username, callback){
    console.log(`Hello ${username}`);
    callback();
}

// here the first parameter is data and second parameter is a callback function where we call the address function as a callback function
person("Diplob Sarker", useraddress);

// simple callback example
fs.readFile("callback/input.txt", "utf-8", (err, data)=>{ // here (err,data)=>{} is a callback function
    if(err) 
    {
        console.log("Error reading file ", err);
        return
    }
    console.log("Content from Text file:", data);
})



// callback hell example. Here we called one callback function inside another callback function. This also known as callback hell
fs.readFile("callback/input.txt", "utf-8", (err, data)=>{ // this is a callback function (callbakc 01)
   // if get any error to file read
    if(err) 
    {
        console.log("Error reading file ", err);
        return
    } 
    // if file read successfully then modify the file data. As example: convert the file data to uppercase
    const modifyFileData = data.toUpperCase();

    // now we update the text file with modified file data. This fs.writeFile is a callback function
    // syntax 
    /* 
    fs.writeFile("filepath", modified Data, (err)=>{ callback function });
    */
    fs.writeFile("callback/input.txt", modifyFileData, (err)=>{  // this is another callback function inside another callback function  (callback 02)
        if(err) 
        {
            console.log("Error writing file ", err);
            return
        }
        console.log("File updated");

        // So if we want to load the file content after file update 
        // then we have to read the file again
        fs.readFile("callback/input.txt", "utf-8", (err, data)=>{ // this is a callback function (callback 03)
            if(err) 
            {
                console.log("Error writing file ", err);
                return
            }
            console.log(data);
        })  
    })  
});
