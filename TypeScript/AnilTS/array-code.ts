let numbersArray : number[]  = [1,2,3,4,5,6,7,8,9,10]
console.log(numbersArray);
let namesArray:Array<string> = ["Jhon","Deo","Jhon Deo"];
console.log(namesArray);
// Array is a pre-define data type in typescript

let readonlyArray:ReadonlyArray<string> = ["Raja","Dipen","Ajoy"];
// readonlyArray.push("jiten"); // error: Property 'push' does not exist on type 'readonly string[]'.
console.log(readonlyArray);


// tupples
// tuple is a fixed length array. Mean If we define a tuple with two or three types, then it can contain only two or three elements, and each element must match the specified type and order.
// Ordered collection of different types
// each element in a tuple has a specific type
let tuppleArray : [number,string] = [1,"Jhon Deo"]
console.log(tuppleArray);

/*
Array vs Tuple
1. Array is a "Homogeneous" collection of values of same type. But Tuple is a "Heterogeneous" collection of values of different types.
2. Array length can grow/shrink. But Tuple length fixed. Means predefined number of elements.
3. In array order not enforced ( same data type in all index ). But in tuple order is enforced ( specific type at each index ).
*/