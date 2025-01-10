const path = require('path');

//get current folder path
const currentFolderPath = path.dirname(__filename);
console.log("curent folder path with folder name: ", currentFolderPath);
//result: curent folder path with folder name:  G:\Reactjs\reactdemo_projects\nodejs\learn


// get folder name
const currentFolderName = path.basename(__dirname);
console.log("curent folder Name: ", currentFolderName);
//result: curent folder Name:  learn


// get file name
const currentFileName = path.basename(__filename);
console.log("curent file Name: ", currentFileName);
//result: curent file Name:  path.js

// get file extension
const currentFileExtension = path.extname(__filename);
console.log("curent file extension: ", currentFileExtension);
//result: curent file extension: .js

// join path
const joinpath = path.join("/user", "data", "projects");
console.log("Join Path : ", currentFolderPath+joinpath);
//result: Join Path :  G:\Reactjs\reactdemo_projects\nodejs\learn\user\data\projects