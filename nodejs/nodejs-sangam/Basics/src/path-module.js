const path = require('path');

console.log(path.basename(__filename));
// path-module.js [ current file name ]

console.log(path.dirname(__filename));
// D:\learn\reactdemo_projects\nodejs\nodejs-sangam\src

console.log(path.extname(__filename));
// .js

console.log(path.parse(__filename));
/*
{
  root: 'D:\\',
  dir: 'D:\\learn\\reactdemo_projects\\nodejs\\nodejs-sangam\\src',
  base: 'path-module.js',
  ext: '.js',
  name: 'path-module'
}
*/


const joinpath = path.join(__dirname, '/user', 'path-module', 'doscuments', 'node');
console.log("Joint path: ", joinpath);