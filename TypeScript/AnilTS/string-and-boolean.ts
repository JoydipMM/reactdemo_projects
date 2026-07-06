/*
How we define a string dataType in typescript
*/
// option 01 : when we wrap anything with in double quotes(""), single quotes('') or back ticks(``) then it is declared the variable as string
var str : string = "Welcome";
var str2 : string = 'Welcome';
var str3 : string = `Welcome`;


// option 02 : If we use any number data type variable inside string data type variable then the number data type variable will be converted to string data type variable
var age01 : number = 10;
var name01: string = "Jhon Deo";
var info:string = `my name is ${name01} and my age is ${age01}`
console.log(info); 
// Result
// my name is Jhon Deo and my age is 10


// conversion number to string
//---------------------------------
var num1 : number = 10;
// If we want to assign num1 to data1 then it will throw error. Because num1 is number data type and data1 is string data type.
// var data1 : string = num1; // error : Type 'number' is not assignable to type 'string'.
// To assign num1 to data1 we need to convert num1 to string. Here we have write some conversion options below:

// conversion option 01 -------------------------------
var data1 : string = num1.toString();
// conversion option 02 -------------------------------
var data1 : string = "" + num1;

console.log(data1); // Result: 10
console.log("datatype: ", typeof data1); // Result: datatype:  string


// conversion boolean to string
//---------------------------------
var booldata:boolean = true;
var booltext1 : string = booldata.toString();
console.log(booltext1); // Result: true
console.log("datatype: ", typeof booltext1); // Result: datatype:  string


// issue:
// ---------------------------------------

// when create a variable with let/const keyword and compile the code then it will throw error because in compiled js file same variable name is redeclared. Because TypeScript read the code from all files and compile the code. If any variable is declared with let/const keyword in other files then it will throw error: Cannot redeclare block-scoped variable 'btext01'.
let btext01 = "demo text";
// This will solved by using configure ts file

