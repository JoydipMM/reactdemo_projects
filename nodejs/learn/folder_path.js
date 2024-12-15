const fs = require('fs');
const path = require('path'); 
const dirpath = path.join(__dirname, 'innerfolder');
const argv = process.argv;
//console.log(dirpath);

if(argv[2]=== 'add'){
    fs.writeFileSync(`${dirpath}/${argv[3]}`, argv[4]);
    console.log(`${argv[3]} file is created in "${dirpath}" folder`);
}else if(argv[2]=== 'remove'){
    fs.unlinkSync(`${dirpath}/${argv[3]}`);
    console.log(`${argv[3]} file is deleted from "${dirpath}" folder`);
}