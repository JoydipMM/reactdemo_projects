function delayFn(time){
    return new Promise((resolve, reject)=> setTimeout(resolve, time));
}


async function delayedAsyncFn(name){
    await delayFn(2000);
    console.log(name);
}


delayedAsyncFn("Sangam"); // Output: Sangam


async function division(num1, num2){
    try{
        if(num2 === 0) throw "Divide by zero showing error";
        await delayFn(2000);
        return num1 / num2;
    }catch(error){
        console.log("Error is: ", error);
        return null;
    }
}

async function calculation(){
    console.log(await division(24, 2));
    console.log(await division(24, 0));
}

calculation();