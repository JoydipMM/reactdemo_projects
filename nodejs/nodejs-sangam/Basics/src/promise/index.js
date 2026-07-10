function delayFn(time){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, time);
    })
}
console.log("program started");

delayFn(3000)
.then(() => 
    {
        console.log("Promise resolved after 3000ms");
        delayFn(2000)
            .then(() => console.log("Promise resolved after 2000ms"))
            .catch(() => console.log("Promise rejected"));
    }
)
.catch(() => console.log("Promise rejected"));

console.log("program ended");



function divideFn(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num2 === 0){
            reject("Divide by zero showing error");
        }else{
            resolve(num1 / num2);
        }
    })
}

divideFn(24, 2)
.then((result) => console.log("Promise resolved", result))
.catch((error) => console.log(error));