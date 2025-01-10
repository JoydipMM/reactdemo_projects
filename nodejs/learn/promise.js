const promiseObject = new Promise((resolve, reject)=>{
    let x = 10;
    if(x < 5){
        resolve("success and resolved");
    }else{
        reject("failed and rejected");
    }
});

promiseObject.then((message)=>{
    console.log("Resolved Message: ", message);
}).catch((message)=>{
    console.log("error: ", message);
})