const fs = require('fs');
const path = require('path'); 
const dirpath = path.join(__dirname, 'innerfolder');
const filename = dirpath+'/textfile_0.txt'

fs.unlinkSync(dirpath+'/textfile_rename.txt')






return(false);
// rename file name
fs.rename(filename, dirpath+'/textfile_rename.txt', (err)=>{
    if(!err){
        console.log("file name updated");
    }
})

// update file content
fs.appendFile(filename, ' @@@@@ new text added 00001', (err)=>{
    if(!err){
        console.log("file conetnt updated");
    }
})

// read file content
fs.readFile(filename, 'utf8' , (err, item)=>{
    if(!err){
        console.log(item);
    }
})