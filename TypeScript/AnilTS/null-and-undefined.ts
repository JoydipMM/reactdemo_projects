// null and undefined are primitive data types
var a = null; // currently data complete absence but we can add any value. So we can declare a data type exclude null with pipe sign
var a1:null | string = null; // So with pipe sign we can declare only string or null
var b = undefined; // variable is declared but not assigned any value
var c = ""; // empty
console.log(a); // null
console.log(typeof a); // object
// but if we assign a string value to null variable then the data type will change to string
a = "Welcome to typescript";
console.log(typeof a); // string
console.log(b); // undefined
console.log(typeof b); // undefined