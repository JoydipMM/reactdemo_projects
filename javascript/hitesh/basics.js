// username="user01"
// email="email@gmail.com"
// phone="1223334434"

// console.table([username, email, phone]);


// var variable_01 = "abcd"
// console.log(variable_01);
// var variable_01 = "efgh"
// console.log(variable_01);
/*
Result:
abcd
efgh
*/
/* note: we can assign same variable with different data value. */


// let variable_01 = "abcd"
// console.log(variable_01); // result: abcd
// //let variable_01 = "12345" // not assign
// /* Note: we can not assign same variable name with "let" veriable type but can assign new data like below */
// variable_01 = "12345"
// console.log(variable_01); // result: 12345


// const variable_01 = "abcd"
// variable_01 = "454545"
// console.log(variable_01);
// // result: variable_01 = "454545" TypeError: Assignment to constant variable.
// /* Note: we can not assign same variable name and not not set new with "const" veriable type */


// let globalVar = "I'm global";

// function test() {
//   console.log(globalVar); // Accessible here
// }

// test() // result: I'm global

// function myFunction() {
//     var localVar = "I'm var local";
//     let localletVar = "I'm let local";
//     console.log(localVar);
//     console.log(localletVar);
// }
// console.log(localVar); // ❌ Error: localVar is not defined
// console.log(localletVar); // ❌ Error: localletVar is not defined

// function testVar() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // 10 (accessible outside the block)
// }
// testVar();
// // result: 10
// console.log(x); // ❌ Error: ReferenceError: x is not defined


// {
//     let blockVar = "inside block";
//     var dddd = "dddd"
// }
// console.log(dddd); // result: dddd
// console.log(blockVar); // ❌ Error: blockVar is not defined

// function outer() {
//     var outerOnlyVar = "outer var";
//     let outerVar = "outer";
//     const outerConstVar = "outer const";

//     function inner() {
//         console.log(outerOnlyVar); // ✅ Can access outerOnlyVar
//         console.log(outerVar); // ✅ Can access outerVar
//         console.log(outerConstVar); // ✅ Can access outerConstVar
//     }

//     inner();
// }

// outer() 
// result: 
// outer var 
// outer 
// outer const


// let person = { name: "Bob", age: 25 };   // 1. Object -> Key-value pairs
// let scores = [90, 85, 88];               // 2. Array -> Ordered list
// function greet() { console.log("Hi"); }  // 3. Function -> Callable object
// new Date(), /abc/ // 4. Date, RegExp -> Built-in object types

// let obj1 = { name: "Alice" };
// let obj2 = obj1;
// obj2.name = "Bob";

// console.log(obj1.name); // ➡️ "Bob" (because obj1 and obj2 refer to the same object)

// let v_1 = "value 01";
// let v_2 = v_1; // here we get of copy data of v_1. So v_1 data will unchanged
// v_2 = "value 02"

// console.log(v_1); // value 01
// console.log(v_2); // value 02


// let user = {
//     name: "Ravi"
// }
// console.log(user.name); // Ravi

// let newname = user
// newname.name = "Kumar"

// console.log(user.name); // kumar
// console.log(newname.name); // kumar

// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `Hello, ${str2}!`; // Template literal

// let str1 = "Hello".length;
// console.log(str1) // result: 5
// let string = "Hello";
// let str1Length = string.length;
// console.log(str1Length) // result: 5

// let string = "Hello";
// let stringUppercase = string.toUpperCase();
// console.log(stringUppercase); // Result: HELLO

// let stringCharAt ="abc".charAt(1);
// console.log(stringCharAt) // result: b

// var stringIndexof = "hello".indexOf("e")
// console.log(stringIndexof) // 1
// var stringIndexof = "hello".indexOf("l")
// console.log(stringIndexof) // 2
// var stringIndexof = "hello".indexOf("z")
// console.log(stringIndexof) // -1 // can not find the charecter

// let message = "Hello, world!";

// "JavaScript".includes("java");   // false
// "JavaScript".includes("Java");   // true

//et str = "JavaScript";

// console.log(str.slice(0, 4));   // "Java"
// console.log(str.slice(4));      // "Script" (from index 4 to end)
// console.log(str.slice(-6));     // "Script" (negative index: count from end)
//console.log(str.slice(7, 5)); // nothing return

// let str = "JavaScript";

// console.log(str.substring(0, 4));   // "Java"
// console.log(str.substring(4));      // "Script"

//"hello".substring(3, 1); // "el" (swaps to substring(1, 3))

// let text = "I like apples";
// let result = text.replace("apples", "oranges");

// console.log(result); // "I like oranges"

// "one one one".replace("one", "two"); // "two one one"

// "one one one".replace(/one/g, "two"); // "two two two"

// "hello123".replace(/\d+/, ""); // "hello" (removes digits)

// let name = "Alice";
// let greeting = "Hello, NAME!".replace("NAME", name); 
// console.log(greeting)// "Hello, Alice!"


// let text = "The sky is blue";
// let result = text.match(/sky/);
// console.log(result[0]); // "sky"
// console.log(result); // [ 'sky', index: 4, input: 'The sky is blue', groups: undefined ]

//let text = "cat, bat, mat";
//let text = "cat bat mat";
// let text = "cat bat mat sky sky sky";
// let result = text.match(/\w+ky/g);
// console.log(result); // ["cat", "bat", "mat"]

// "text".match(/z/)  // → null

// let code = "Your code is 12345";
// let digits = code.match(/\d+/);
// console.log(digits[0]); // "12345"

// let sentence = "The rain in Spain rain";
// let index = sentence.search(/rain/);
// console.log(index); // 4
// "The rain".search(/snow/); // -1 --> not found
// "Hello World".search(/world/i); // 6  --> Case-insensitive search

// let str = "Find the word";
// str.search(/word/);     // 9
// str.match(/word/);      // ['word']
// str.match(/word/g);     // ['word']
// str.match(/notfound/);  // null

// let rgxx = "123-456-7890".replace(/\d/g, "*");  // "***********"
// console.log(rgxx)

// "hello world".search(/world/);  // 6

// "one two three".match(/\w+/g); // ["one", "two", "three"]

// let str = "a1 b2 c3";
// let matches = [...str.matchAll(/\w\d/g)];
// console.log(matches);
// /* result
// [
//   [ 'a1', index: 0, input: 'a1 b2 c3', groups: undefined ],
//   [ 'b2', index: 3, input: 'a1 b2 c3', groups: undefined ],
//   [ 'c3', index: 6, input: 'a1 b2 c3', groups: undefined ]
// ]
// */
// console.log(matches[2]); // [ 'c3', index: 6, input: 'a1 b2 c3', groups: undefined ]
// console.log(matches.map(m => m[0])); // ["a1", "b2", "c3"]


// let splitString = "apple,banana;grape".split(/[,;]/); 
// console.log(splitString)// ["apple", "banana", "grape"]

// let RegExpString  = /\d{3}-\d{2}-\d{4}/.test("123-455-6789"); 
// console.log(RegExpString);// true

// let name = "Doe, John";
// let result = name.replace(/(\w+), (\w+)/, "$2 $1");
// console.log(result); // "John Doe"

// let text = "hello world";
// let result = text.replace(/\b\w/g, char => char.toUpperCase());
// console.log(result); // "Hello World"

// let input = "User1234";
// let masked = input.replace(/\d/g, () => "*");
// console.log(masked); // "User****"
// let fullmasked = input.replace(/./g, "*");
// console.log(fullmasked); // "User****"

// let input = "User1234";
// let masked = input.slice(0, 2) + "*".repeat(input.length - 2);
// console.log(masked); // "Us******"

// let message = "   Hello world!   ";
// let cleaned = message.trim();
// console.log(cleaned);         // "Hello world!"
// console.log(message.length);  // 18
// console.log(cleaned.length);  // 12

// let sentence = "JavaScript is fun";
// let words = sentence.split(" ");
// console.log(words); // ["JavaScript", "is", "fun"]


// let csv = "red,green,blue";
// let colors = csv.split(",");
// console.log(colors); // ["red", "green", "blue"]

// "Hello".split(""); // ["H", "e", "l", "l", "o"]


// const score = 400;
// console.log(score); // 400

// const scoreNumber = new Number(score);
// console.log(scoreNumber); // [Number: 400]

// let num = 5.6789;

// num.toFixed(2);      // "5.68" (returns string with 2 decimal places)
// num.toString();      // "5.6789" (string format)
// Number.isInteger(num); // false
// let num = 5.6789;
// console.log(num.toFixed(3))

// Number("123");     // 123
// parseInt("123px"); // 123
// parseFloat("3.14"); // 3.14
// +"5.5";            // 5.5 (unary plus)

// console.log(parseInt("123px"));
//console.log(typeof +"5.5");


// let x = 10;
// let y = 3;

// x + y;  // 13
// x - y;  // 7
// x * y;  // 30
// x / y;  // 3.333...
// x % y;  // 1 (remainder)
// x ** y; // 1000 (exponentiation)


// parseInt("123");        // 123
// parseInt("123abc");     // 123 (stops at "a")
// parseInt("abc123");     // NaN (starts with non-digit)

// parseInt("10", 10);     // 10 (decimal)
// parseInt("10", 2);      // 2  (binary)
// parseInt("F0", 16);     // 255 (hex)

// parseInt("08");    // 8 (OK in modern JS, but older versions treated this as octal!)
// parseInt("08", 10); // 8
// console.log(parseInt("08", 10));

// let price = "99 dollars";
// parseInt(price);   // 99
// parseInt("99 dollars"); // 99
// parseInt("$99"); // NaN
// console.log(parseInt("$99"));

// let price = "$99.99";
// let digits = price.match(/\d+/); // extracts "99"
// let number = parseInt(digits[0]);
// console.log(number); // 99

// let price = "$99.99";
// let stringReplace = price.replace("$", ""); // 99.99 [type string]
// let toNumber = Number(stringReplace); // [Number: 99.99]
// console.log(toNumber); // 99.99
// let onlyNumber = parseInt(stringReplace);
// console.log(onlyNumber); // 99

// let price = "$99.99";
// let number = parseInt(price.replace(/[^\d.]/g, ""));
// console.log(number); // 99

// function parsePrice(priceString) {
//     if (typeof priceString !== "string") return NaN;

//     // Remove everything except digits and decimal point
//     let cleaned = priceString.replace(/[^\d.]/g, "");

//     // Convert to float or integer as needed
//     return cleaned.includes('.') ? parseFloat(cleaned) : parseInt(cleaned);
// }

// console.log(parsePrice("$5.99"));      // 5.99
// console.log(parsePrice("Rs. 1200"));   // 1200
// console.log(parsePrice("€49.95"));     // 49.95
// console.log(parsePrice("Free!"));      // NaN
// console.log(parsePrice(123));          // NaN (not a string)


// parseFloat("3.14");      // 3.14
// parseFloat("99.9abc");   // 99.9
// parseFloat("abc123");    // NaN
// parseFloat("-10.5");     // -10.5

// let price = "$45.75";
// let cleaned = price.replace(/[^0-9.]/g, "");  // "45.75"
// let number = parseFloat(cleaned);            // 45.75


// let num = 1234567.89;
// console.log(num.toLocaleString()); // "12,34,567.89" (default locale)

// let num = "1234567.89";
// num.toLocaleString("de-DE"); // "1.234.567,89" (German format)
// num.toLocaleString("hi-IN"); // "12,34,567.89" (Indian format)

// let num = "1234567.89";
// num.toLocaleString("de-DE") // 1234567.89

//let num = 1234567.89;
// num.toLocaleString("en-US", { style: "currency", currency: "USD" }); // "$1,234,567.89"
// num.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }); // "￥1,234,568"
// console.log(num.toLocaleString("hi-IN", { style: "currency", currency: "INR" })); // ₹12,34,567.89

// num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) // 1,234,567.89
// num.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) // 1,234,567.9
// console.log(num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })) // 1,234,567.89
// console.log(num.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })) // 1,234,567.9


// let now = new Date();
// console.log(now.toLocaleString()); // "2/5/2025, 10:52:53 pm" (in en-US)

// let date = new Date();
// console.log(date.toLocaleString("hi-IN")); // "2/5/2025, 10:52:54 pm"
// console.log(date.toLocaleString("en-US")); // "5/2/2025, 10:52:54 PM"
// console.log(date.toLocaleString("fr-FR")); // "02/05/2025 22:52:54"
// console.log(date.toLocaleString("ja-JP")); // "2025/5/2 22:52:54"

// let date = new Date();
// console.log(date.toLocaleDateString("en-GB")); // "01/05/2025"

// let date = new Date();
// console.log(date.toLocaleTimeString("en-US")); // "10:30:45 AM"

// let date = new Date();
// let detailTime = date.toLocaleString("en-US", {
//     weekday: "long",    // "Thursday"
//     year: "numeric",    // "2025"
//     month: "long",      // "May"
//     day: "numeric",     // "1"
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit"
//   });
// console.log(detailTime); // "Thursday, May 1, 2025, 10:30:45 AM"

// let num = 1234455;
// console.log(typeof num.toString())

// let num = 123;
// console.log(num.toString()); // "123"

// let num = 255;
// num.toString(2);   // "11111111" (binary)
// num.toString(8);   // "377"      (octal)
// num.toString(16);  // "ff"       (hexadecimal)
// [1, 2, 3].toString(); // "1,2,3"

// console.log(new Date()); // 2025-05-02T17:35:28.488Z
// console.log(new Date().toString()); // Fri May 02 2025 23:05:28 GMT+0530 (India Standard Time)

// let userId = 1001;
// let idAsString = "User_" + userId.toString();
// console.log(idAsString); // "User_1001"

// let num = 42;
// console.log(num.valueOf()); // 42 (same as num)

// let str = new String("hello");
// console.log(str.valueOf()); // "hello"

// let date = new Date("2025-01-01");
// console.log(date.valueOf()); // 1735689600000 (timestamp in ms)

// let user = {
//     points: 100,
//     valueOf() {
//         return this.points;
//     }   
// };
  
// console.log(user + 50); // 150

// let num = 42;
// console.log(num.toFixed(2));

//console.log(Math.random()) // 0.5150337012024668
//Math.random() // 0.5150337012024668

// let random0to10 = Math.random() * 10;
// console.log(random0to10) // 6.255676552516052


// let randomInt0to9 = Math.floor(Math.random() * 10);
// console.log(randomInt0to9)// 0 // 8 // 5


// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
// let randomInt = getRandomInt(5, 15); // e.g., between 5 and 15
// console.log(randomInt)


// let ary = ["name01", "name02", "name03", "name04", "name05", "name06"];

// let arySlice = ary.slice(1,4) 
// console.log("Slice Array", arySlice) // ["name02", "name03", "name04"]
// console.log("Actual Array", ary) // ["name01", "name02", "name03", "name04", "name05", "name06"]

// let arySplice = ary.splice(1,4);
// console.log("Splice Array", arySplice) // ["name02", "name03", "name04"]
// console.log("Actual Array", ary) // [ 'name01', 'name06' ]

// console.log(ary.join()); // name01,name02,name03,name04,name05,name06

// console.log(typeof ary.join()); // string

// console.log(ary.slice(1,3)); //[ 'name02', 'name03' ]

// console.log(ary.slice(3)); //[ 'name04', 'name05', 'name06' ]

// console.log(ary.slice(-2)); // [ 'name05', 'name06' ]

// console.log(ary.slice(-5, -2)); // [ 'name02', 'name03', 'name04' ]

// console.log(ary.slice(-5, -3)); // [ 'name02', 'name03' ]

// console.log(ary.slice(-5, -1)); // [ 'name02', 'name03', 'name04', 'name05' ]


// let fruits = ["apple", "banana", "mango"];
// fruits.splice(1, 0, "orange", "kiwi");
// console.log(fruits); // ["apple", "orange", "kiwi", "banana", "mango"]

// let fruits = ["apple", "banana", "mango", "kiwi"];
// let removed = fruits.splice(1, 2); // remove 2 items from index 1

// console.log(fruits); // ["apple", "kiwi"]
// console.log(removed); // ["banana", "mango"]

// let fruits = ["apple", "banana", "mango"];
// fruits.splice(1, 2, "grape", "peach"); // replace 2 items

// console.log(fruits); // ["apple", "grape", "peach"]

// const arry01 = ["name01", "name02", "name03",];
// const arry02 = ["name04", "name05", "name06"];
// const arry03 = ["name07", "name08", "name09"];

// arry01.push(arry02)
// console.log(arry01) // [ 'name01', 'name02', 'name03', [ 'name04', 'name05', 'name06' ] ]

// arry01.concat(arry02)
// console.log(arry01) // [ 'name01', 'name02', 'name03', [ 'name04', 'name05', 'name06' ] ]

// const ary4 = arry01.concat(arry02, arry03)
// console.log(ary4) // [ 'name01', 'name02', 'name03', 'name04', 'name05', 'name06', 'name07', 'name08','name09' ]
// option 2
// const ary5 = [...arry01, ...arry02, ...arry03];
// console.log(ary5) // [ 'name01', 'name02', 'name03', 'name04', 'name05', 'name06', 'name07', 'name08','name09' ]


// const arry01 = ["name01", "name02", "name03",];
// const arry02 = ["name04", "name05", "name06"];
// const arry03 = ["name07", "name08", "name09"];

//check is array or not
// console.log(Array.isArray(arry01)); // true
// console.log(Array.isArray("javascript")); // false

// convert to array
// console.log(Array.from("javascript")); // [ 'j', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't' ]
// console.log(Array.from({ name: "java" })); // []

// const score1 = 100;
// const score2 = 200;
// const score3 = 300;

// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

// 1.Object Literal
// const person = {
//   name: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   isStudent: false
// };
// // 1.Object Literal access
// console.log(person.name); // Alice
// console.log(person["name"]); // Alice
// console.log(person["full name"]); // Alice Gomes

//const newSymbol = Symbol("sym_001");

// const person = {
//   name: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   [newSymbol]: "symbol 0001",
//   isStudent: false
// };

// 1.Object Literal access
/*console.log(person)
{
  name: 'Alice',
  'full name': 'Alice Gomes',
  age: 30,
  isStudent: false,
  [Symbol(sym_001)]: 'symbol 0001'
}
*/
// console.log(person.name); // Alice
// console.log(person["name"]); // Alice
// console.log(person["full name"]); // Alice Gomes
// console.log(person[newSymbol]); // symbol 0001
// console.log(Object.keys(person)); // [ 'name', 'full name', 'age', 'isStudent' ] note symbol key name will not show here


// update object key value
// person.name = "joy";
// console.log(person.name); // joy


// const person = {
//   name: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   isStudent: false
// };

// person.greeting = function(){
//   console.log("greeting function called"); 
//   return("greeting function return value");
// }


//console.log(person.greeting());
// without return
// greeting function called
//undefined

// with return
// greeting function called
//greeting function return value

// person.nameShow = function(){
//   return(`Hello, ${this.name}`);
// }
// console.log(person.nameShow()); // Hello, Alice


// person.nameChange = function(nameparameter){
//   person.name = nameparameter;
//   return(`Hello, ${this.name}`);
// }
// console.log(person.nameChange("Andrew Symon")); // Hello, Andrew Symon

// singleton object declaration
//const singletonObject = new Object();

// const person = {
//   firstName: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   isStudent: false
// };

// const user = {
//   email: "email@gmail.com",
//   fullname: {
//     firstname: "Rahul",
//     lastName: "Bose",
//   }
// }

// console.log(user);
// /*
// {
//   email: 'email@gmail.com',
//   fullname: { firstname: 'Rahul', lastName: 'Bose' }
// }
// */
// console.log(user.fullname); // { firstname: 'Rahul', lastName: 'Bose' }

// user.fullname.firstname = person.firstName;

// console.log(user.fullname) // { firstname: 'Alice', lastName: 'Bose' }

// const person = {
//   firstName: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   isStudent: false
// };

// const user = {
//   email: "email@gmail.com",
//   fullname: {
//     firstname: "Rahul",
//     lastName: "Bose",
//   }
// }
// combine Multiple Object
//const combinedObjectData = Object.assign({}, person, user);
// Object.assign(target, remaining are source);

//console.log(combinedObjectData);
/*
{
  firstName: 'Alice',
  'full name': 'Alice Gomes',
  age: 30,
  isStudent: false,
  email: 'email@gmail.com',
  fullname: { firstname: 'Rahul', lastName: 'Bose' }
}
*/

//console.log(person);

// combined objects with spread oparator
// const combinedObjectDatatype2 = { ...user, ...person };
// console.log(combinedObjectDatatype2);
/*/
{
  email: 'email@gmail.com',
  fullname: { firstname: 'Rahul', lastName: 'Bose' },
  firstName: 'Alice',
  'full name': 'Alice Gomes',
  age: 30,
  isStudent: false
}
*/


// const users = [
//   { id:1, name:"A" },
//   { id:2, name:"B" },
//   { id:3, name:"c" },
// ]

// console.log(users[1].name); // B

// const person = {
//   firstName: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   isStudent: false
// };
// console.log( person.hasOwnProperty("firstName")); // true
// console.log( person.hasOwnProperty("email")); // false

// const person = {
//   firstName: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   isStudent: false
// };
// const {firstName, age, isStudent:studenAccess, "full name": fullName } = person;
// console.log(fullName); // Alice Gomes
// console.log(studenAccess); // false


// const singletonObject = new Object();

// singletonObject.firstName = "Rana";
// singletonObject.lastName = "Roy";
// singletonObject.email = "rroy@gmail.com";

// console.log(singletonObject); // { firstName: 'Rana', lastName: 'Roy', email: 'rroy@gmail.com' }


// function Person(name, age, isStudent) {
//   this.name = name;
//   this.age = age;
//   this.isStudent = isStudent;
// }

// const person = new Person("Alice", 30, false);
// console.log(person); // Person { name: 'Alice', age: 30, isStudent: false }
// console.log(typeof person); // object

// class Person {
//   constructor(name, age, isStudent) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
//   }
// }

// const person = new Person("Alice", 30, false);
// console.log(person); // Person { name: 'Alice', age: 30, isStudent: false }
// console.log(typeof person); // object


// function greet() {
//   console.log("Hello!");
// }

// greet(); // Output: Hello!

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// greet("Alice"); // Output: Hello, Alice!

// function add(a, b) {
//   return a + b;
// }

// const sum = add(3, 4);
// console.log(sum); // Output: 7

// const multiply = function(x, y) {
//   return x * y;
// };

// console.log(multiply(2, 5)); // Output: 10

// const multiply = function(x, y) {
//   return x * y;
// };

// console.log(multiply(2, 5)); // Output: 10


// const subtract = (a, b) => a - b;
// console.log(subtract(10, 4)); // Output: 6

// setTimeout(function() {
//   console.log("This runs after 1 second");
// }, 1000);


// function cartItem (...items) {
//   console.log(items);
// }
// cartItem(50,100,200,400,500) // [ 50, 100, 200, 400, 500 ]

// function cartItemTwo (item1, item2, ...items) {
//   console.log(items);
// }
// cartItemTwo(50,100,200,400,500) // [ 200, 400, 500 ]



// const person = {
//   firstName: "Alice",
//   "full name": "Alice Gomes",
//   age: 30,
//   isStudent: false
// };

// function presonFunction(anyData){
//   console.log(anyData)
// }

// presonFunction(person)
/* result: 
{
  firstName: 'Alice',
  'full name': 'Alice Gomes',
  age: 30,
  isStudent: false
}
*/


// presonFunction({
//   username: "sdfsdfsdfs",
//   email:"dfsdfsdfsd#fgdfgdfg"
// })

// presonFunction()
/*
result: ------------
{ username: 'sdfsdfsdfs', email: 'dfsdfsdfsd#fgdfgdfg' }
undefined
*/

// funcOne() // function 01
// function funcOne(){
//   console.log("function 01");
// }

// funcTwo() // ReferenceError: Cannot access 'funcTwo' before initialization
// const funcTwo = function (){
//   console.log("function 02");
// }


// const obj01 = {
//   name: "Jatin",
//   obj01fnc: function (){
//     return (`obj01fnc function called ${this.name}`);
//   }
// }

// console.log(obj01.obj01fnc());

// (function(){})()

// (function() {
//   console.log("This runs immediately!");
// })();

// (() => {
//   console.log("Arrow function IIFE");
// })();

// (function(name) {
//   console.log("Hello, " + name);
// })("Alice"); // Hello, Alice

// (function() {
//   const secret = "hidden";
//   console.log(secret); // hidden
// })();

// console.log(secret); // ❌ Error: secret is not defined


// const counter = (function() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       return count;
//     },
//     reset() {
//       count = 0;
//     }
//   };
// })();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// counter.reset();
// console.log(counter.increment()); // 1


// for of loop
// const arr = [1,2,3,4,5,6]
// for (const ar of arr) {
//   console.log(ar);
// }
/*
1
2
3
4
5
6
*/

// const text = "javascript";
// for (const element of text) {
//   console.log(element);
// }
/*
j
a
v
a
s
c
r
i
p
t
*/

const maploop = new Map()
maploop.set("name", "Raju")
maploop.set("email", "raju@gmail.com")
maploop.set("email", "raju@gmail.com")

//console.log(maploop); // Map(2) { 'name' => 'Raju', 'email' => 'raju@gmail.com' }

for (const element of maploop) {
  //console.log(element); 
}
/*
[ 'name', 'Raju' ]
[ 'email', 'raju@gmail.com' ]
*/

for (const [key, value] of maploop) {
  //console.log(key); 
}
// name
// email

for (const [key, value] of maploop) {
  //console.log(value); 
}
// Raju
// raju@gmail.com

// const ob1 = {
//   'name': 'Raju',
//   'email': 'raju@gmail.com'
// }

// for (const [key, value] of ob1) {
//   console.log(key + "->" +value); // TypeError: ob1 is not iterable
// }


const ob2 = {
  'name': 'Raju',
  'email': 'raju@gmail.com'
}

for (const key in ob2) {
  console.log(key)
}





 