const wrapperExplorer = require('./wrapper-explorer');

console.log('__filename in wrapper-demo.js:', __filename);
console.log('__dirname in wrapper-demo.js:', __dirname);
console.log(wrapperExplorer.greet('John Doe'));

/*
Result:
    
__filename in wrapper-explorer.js: D:\learn\reactdemo_projects\nodejs\nodejs-sangam\src\wrapper-explorer.js
__dirname in wrapper-explorer.js: D:\learn\reactdemo_projects\nodejs\nodejs-sangam\src
__filename in wrapper-demo.js: D:\learn\reactdemo_projects\nodejs\nodejs-sangam\src\wrapper-demo.js
__dirname in wrapper-demo.js: D:\learn\reactdemo_projects\nodejs\nodejs-sangam\src
Hello from wrapper-explorer.js John Doe
undefined

*/