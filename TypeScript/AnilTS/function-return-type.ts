// function return type:
/*

*/

function fruits(){
    return "Apple"; // here return type is string. auto detected by typeScript compiler also known as type inference
}

function fruits_manual_type():string{ // we can also declare the return type02
    return "Apple";
}

function simple(){

} // when we don't return any value then the return type is void


// never data ttype is used when a function never returns or when something can never happen.
function loopFnc(){
    console.log("loop");
    while(true){
        console.log("while loop"); // non stop execution.
    }
}

function neverFunc():never{ // we can declare the return never or can not.
    throw new Error("error");
} // this function will throw error. So the return type is never



// function params type
function add(a:number,b:number):number{ // here the return type is number
    return a + b;
}


// union type
/*
A union type in TypeScript allows a variable, parameter, or return type to hold one of multiple types. It is represented using the pipe (|) operator.
*/
