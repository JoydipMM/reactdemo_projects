var num1:number = 10;
var num2:number = 20;

//var octal:number = 00001; // Octal literals are not allowed. Use the syntax '0o1'.
var octal:number = 0o1;
// var hexa:number = 00001;
var hexa:number = 0x00001; // 0x for hexadecimal
//var binary:number = 00001;
var binary:number = 0b00001; // 0b for binary
/*
If any variable is declared with let, const keyword in other files then it can't be redeclared.
If any variable is declared with var keyword in other files then it can be redeclared.
*/

var total:number = num1 + num2;
console.log(total);
console.log(octal + 20);
console.log(hexa + 20);
console.log(binary + 20);

// conversion
var item1:number = 100;
var iten2 = "50";

console.log(item1 + iten2); // 10050

// string to number conversion
//------------------------------------------
// option 01
var convertItem2 = +iten2;
console.log(item1 + convertItem2); // 150
console.log(item1 + +iten2); // 150

// option 02
console.log(item1 + Number(iten2)); // 150


// Type inference with number
//-------------------------------------------------
/*
Type inference is the ability of TypeScript to automatically determine (infer) the type of a variable, parameter, return value, or expression without you explicitly specifying the type.
*/
var num3 = 10; // here TS assumed the type of num3 as number
var num4 = "10"; // here TS assumed the type of num4 as string

// now if we update with different value then it will throw error
//num3 = "10"; // error: Type 'string' is not assignable to type 'number'.
//num4 = 10; // error: Type 'number' is not assignable to type 'string'.

// assigned two type data types of a variable
var item3: number | string = 10;
item3 = "10";
item3 = 20;
// now we can update with string and number value