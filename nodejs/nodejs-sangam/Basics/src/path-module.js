const path = require('path');
const fs = require('fs');

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

console.log(path.resolve("src", "..", "public"));
// Result: C:\Users\Nodejs\Projects\public

console.log(path.resolve("src", "/images", "logo.png"));
// /images/logo.png

console.log(path.resolve("a", "b", "/c", "d"));
// \c\d
// Note: Everything before /c is ignored.

console.log(path.resolve(".."));


const uploadPath = path.resolve("uploads");
console.log(uploadPath); // D:\learn\Project-folder\uploads


// const filePath = path.resolve("uploads", "image.png");
// console.log(filePath); // D:\learn\Project-folder\uploads\image.png

// const filePath2 = path.resolve("data", "users.json");
// console.log(filePath2);
// // D:\learn\Project-folder\data\users.json

// const filePath3 = path.resolve(__dirname, "data", "users.json");
// console.log(filePath3);
// // D:\learn\Project-folder\src\data\users.json

const filePath = "users//documents///file.txt";
console.log(path.normalize(filePath));
// Result: users/documents/file.txt

console.log(path.normalize("project/src/./app.js"));
// Result: project/src/app.js

console.log(path.normalize("project/src/../app.js"));
// Result: project/app.js

console.log(path.normalize("folder\\\\subfolder//file.txt"));
// Result: folder/subfolder/file.txt

console.log(path.normalize("/home/user/../Downloads/file.txt"));
// Result: /home/Downloads/file.txt


console.log(path.normalize("src/../app.js"));
// Result: app.js
console.log(path.resolve("src/../app.js"));
// Result: C:\Users\Nodejs\Projects\app.js