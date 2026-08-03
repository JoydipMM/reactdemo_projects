// union type
/*
A union type in TypeScript allows a variable, parameter, or return type to hold one of multiple types. It is represented using the pipe (|) operator.
*/

var s_data:string | number | Array<string> = "raja"; // string type
s_data = 25; // number type
s_data = ["apple", "banana"]; // array type

function fruitsData():string | Array<string>{
    var item= 1;
    if(item>1){
        return ["apple", "banana"];
    }else{
        return "apple";
    } 
}

console.log(fruitsData()); // Output: apple



function studentInfo(data:string | number){
    if(typeof data == "string"){
        console.log("name: ", data);
    }
    if(typeof data == "number"){
        console.log("age: ", data);
    }
}

studentInfo("raja"); // Output: name: raja
studentInfo(25); // Output: age: 25

