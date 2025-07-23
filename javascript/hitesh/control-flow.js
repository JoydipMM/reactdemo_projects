const user = {
    username: "rajdip",
    otherName: function(){
        console.log(`${this.username} , welocme`)
    }
}
//console.log(user.username);

//user.otherName();
// console.log(this);

// // check array
// const arrData = [];
// if(arrData.length === 0){
//     console.log("array is empty");
// }

// // check object
// const objData = {};
// if( Object.keys(objData).length === 0){
//     console.log("objData is empty");
// }


const colors = ["red", "green", "blue"];
for (const color of colors) {
  //console.log(color);
}
// Output:
// red
// green
// blue


const word = "Hello";
for (const char of word) {
  //console.log(char);
}
// Output: H, e, l, l, o


const wordArryObject = [{name: "name01"},  {name: "name02"}, {name: "name03"}];
for (const char of wordArryObject) {
  //console.log(char);
}
// result:
// { name: 'name01' }
// { name: 'name02' }
// { name: 'name03' }

// const fruits = new Set(["apple", "banana", "orange"]);
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// apple
// banana
// orange


const lang = new Map();
lang.set("ENG", "English");
lang.set("MATH", "Mathametics");

//console.log(lang); // Map(2) { 'ENG' => 'English', 'MATH' => 'Mathametics' }

for (let [key, value] of lang){
  //console.log(key+" - "+value); 
}


const dataObject = {
  js: "javascript",
  cpp: "C++",
}

for (const key in dataObject) {
    //console.log(`${key} - the short form of - ${dataObject[key]}`);
}
// Result:
// js - the short form of - javascript
// cpp - the short form of - C++


const colorsarr = ["red", "green", "blue"];
for (const key in colorsarr) {
    //console.log(`${key} - the short form of - ${colorsarr[key]}`);
}
// result
// 0 - the short form of - red
// 1 - the short form of - green
// 2 - the short form of - blue

const langdata = new Map();
lang.set("ENG", "English");
lang.set("MATH", "Mathametics");
for (const key in langdata) {
    //console.log(`${key} - the short form of - ${langdata[key]}`);
}

// const techlist = ["js", "java", "css", "html"];

// techlist.forEach((tech, index) => console.log(tech));
// const newTechData = techlist.forEach((tech, index) => console.log(tech));
// result:
// js
// java
// css
// html

// const ArryObject = [{name: "name01", roll: 34},  {name: "name02", roll: 24}, {name: "name03", roll: 14}];
// ArryObject.forEach((arr, index) => console.log(arr.roll));
// result:
// 34
// 24
// 14

// const ArryObject = [{name: "name01", roll: 34},  {name: "name02", roll: 24}, {name: "name03", roll: 14}];
// const val1 =  ArryObject.forEach((arr, index) => console.log(arr.roll));
// console.log(val1)
// Result:
// 34
// 24
// 14
// undefined


// const mynums = [1,2,3,4,5,6,7,8,9,10];
// const numfilter =  mynums.filter((num)=>(
//  num > 4
// ))
//console.log(numfilter)
// resutl: [ 5, 6, 7, 8, 9, 10]



// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// const userBooks = books.filter((book)=> book.genre === "Fiction").filter((book)=> book.edition >2004);
//console.log(userBooks);
// [ { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 } ]


// const mixed = [0, "hello", false, null, 42];
// const truthy = mixed.filter(Boolean);
//console.log(truthy) // ["hello", 42]

// const students = [
//   { name: "Alice", marks: 82 },
//   { name: "Bob", marks: 45 },
//   { name: "Charlie", marks: 65 }
// ];

// const passed = students.filter(student => student.marks >= 50);
//console.log(passed);
/*
[
  { name: "Alice", marks: 82 },
  { name: "Charlie", marks: 65 }
]
*/

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const squares = numbers.map(num => num+4);
//console.log(squares); // [5,  6,  7,  8,  9, 10, 11, 12, 13, 14]

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 }
// ];
// const names = users.map(user => user.name);
//console.log(names); // ["Alice", "Bob", "Charlie"]

arrys = [1,2,3]
initialValue= 0;

const newarrs = arrys.reduce((accumulator, currentValue)=> { 
  //console.log(`accumulator value: ${accumulator} and current value: ${currentValue}`);
  return accumulator+currentValue;
}, initialValue );

//console.log(newarrs); //result: 6
/*
result:
accumulator value: 0 and current value: 1
accumulator value: 1 and current value: 2
accumulator value: 3 and current value: 3
6
*/


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }
