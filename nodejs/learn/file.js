const fs = require('fs');
const path = require('path');

// create path for Data Folder
const datafolder = path.join(__dirname, 'data');

// checking that Data folder is there or not, if not then create a data folder
if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
    console.log('data folder created');
}

// create a file inside data folder and add some content in the file
const filePath = path.join(datafolder, "data01.txt");
fs.writeFileSync(filePath, "file text content added");

// read conetnt from the created file
const readFileContent = fs.readFileSync(filePath, 'utf8');
console.log("File Content: ", readFileContent);

// appended some new text inside the file
fs.appendFileSync(filePath, "\nNew text Content appended");
const readAppendedFileContent = fs.readFileSync(filePath, 'utf8');
console.log("Appended Content: ", readAppendedFileContent);


// create file with Async way-------------------------------
const AsyncFilePath = path.join(datafolder, 'async-file.txt');
fs.writeFile(AsyncFilePath, 'Text content for Async file', (err)=>{
    if(err) throw err;
    console.log("Async file is created");

    // read async file
    fs.readFile(AsyncFilePath, 'utf8',(err, data)=>{
        if(err) throw err; console.log("Async File content: ", data); 
    
        // append new content
        fs.appendFile(AsyncFilePath, "\nNew Async content append", (err)=>{
            if(err) throw err;
            console.log("New text line is added in async file");
            fs.readFile(AsyncFilePath, 'utf8', (err, updatedData)=>{
                if(err) throw err;
                console.log("Appended content of Async file: ", updatedData);
            })
        })
    }) 
})
