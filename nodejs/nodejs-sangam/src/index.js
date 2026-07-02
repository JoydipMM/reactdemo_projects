const calculate = require('./calcualate');


console.log(calculate.sum(1, 2)); // 3
console.log(calculate.minus(3, 2)); // 1

// module wrapper function behind the scene in node.js
/*
(
    function (exports, require, module, __filename, __dirname) {
        const calculate = require('./calcualate');
        console.log(calculate.sum(1, 2)); // 3
        console.log(calculate.minus(3, 2)); // 1
    }
)
*/

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));