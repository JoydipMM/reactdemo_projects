const fs = require('fs');
const path = require('path'); 
const dirpath = path.join(__dirname, 'innerfolder');

for(i=0; i<5; i++){
    fs.writeFileSync(`${dirpath}/textfile_${i}.txt`, 'text file content')
}

fs.readdir(dirpath, (err, files)=>{
    console.log("show files list in console as array");
    console.log(files);
    console.log("get individual files name one by one");
    files.forEach((file)=>{ console.log(file) });
});