const fs = require('fs');
const path = require('path');


//fs.mkdirSync("datafolder");
// It will create a directory named "datafolder" inside the main directory
// folder directory d:\learn\reactdemo_projects\nodejs\ .  So it will create a folder named "datafolder" inside the "nodejs" directory
// If the directory already exists, it will throw an error "file already exists"

//fs.mkdirSync(path.join(__dirname, "datafolder"));
// folder directory d:\learn\reactdemo_projects\nodejs\src\
// It will create a directory named "datafolder" inside the current directory in "src" folder

// define data folder
const dataFolder = path.join(__dirname, "datafolder");

// check if data folder exists or not
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder); // create data folder
    console.log("Directory created");
}else{
    console.log("Directory already exists");
}

// create path for file
const filePath = path.join(dataFolder, "note-01.txt");

// create file with content
fs.writeFileSync(filePath, "Hello World");
console.log("File created"); 

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File content:", readContentFromFile);
// File content: Hello World

fs.appendFileSync(filePath, "\nThis is a new line");
console.log("File content after append:", fs.readFileSync(filePath, "utf-8"));
// File content after append: Hello World This is a new line

const asyncFilePath = path.join(dataFolder, "async-note-01.txt");
fs.writeFile(asyncFilePath, "Async Hello World", (err) => {
    if(err) throw err;
    console.log("File created");

    // read file
    fs.readFile(asyncFilePath, "utf-8", (err, data)=>{
        if(err) throw err;
        console.log("Async File content:", data);

        fs.appendFile(asyncFilePath, "\nThis is a new line", (err)=>{
            if(err) throw err;
            console.log("File content after append:", fs.readFileSync(asyncFilePath, "utf-8"));
            // File content after append: Async Hello World This is a new line

            // get updated file content
            fs.readFile(asyncFilePath, "utf-8", (err, data)=>{
                if(err) throw err;
                console.log("updated File content:", data);
                // File content after append: Async Hello World This is a new line
            })
        })
    });
    // File content: Async Hello World
})

// delete file
// fs.unlinkSync(filePath);
// console.log("File deleted");