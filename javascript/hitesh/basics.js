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
