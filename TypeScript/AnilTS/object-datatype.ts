let obj01:{name:string, age:number, city:string} = {
    name: "Raja",
    age: 20, 
    city: "Delhi"
}

console.log(obj01);

obj01.name = "Dipen"; // we can change the with name with string type not number
console.log(obj01);

let obj02:{
    name:string, 
    age:number, 
    city:string,
    items:Array<{name   : number, price: number}>
} = {
    name: "Raja",
    age: 20, 
    city: "Delhi",
    items:[
        {name: 10, price: 20},
    ]
}
obj02.city = "Gurgaon"; // we can change the with name with string type not number
console.log(obj02);

// add new key value pair like "company"
// for this we need to add the new key with two data type with || (or) pipe sign. Also we need to assign "undefined" to the new key
// but here issue is that we need to define datatype along with undefined for every new element.
let obj03:{
    name:string, 
    age:number, 
    city:string,
    company:string | undefined,
    items:Array<{name : number, price: number}>
} = {
    name: "Raja",
    age: 20, 
    city: "Delhi",
    company: undefined, // assign undefined for default
    items:[
        {name: 10, price: 20},
        {name: 10, price: 20},
    ]
}

console.log(obj03);

// second option
let obj04:{
    [key:string]:string | number | boolean | undefined
} = {
    name: "Raja",
    age: 20
}
console.log(obj04); // { name: 'Raja', age: 20 }
obj04.city = "Gurgaon";
console.log(obj04); // { name: 'Raja', age: 20, city: 'Gurgaon' }


let value1:unknown = "Raja";
value1 = 10;

//value1.toUpperCase(); // error 'value1' is of type 'unknown'. to slove this we need to check the type first.
if(typeof value1 === "string"){
    value1.toUpperCase();
}


