// Lesson : File Handling in Nodejs : Read-Write-Create

// Import fs module
const fs = require("fs");

//write file: Sync
//fs.writeFileSync("./test.txt", "Hey Faraz");

//write file: Async
//fs.writeFile("./test.txt", "Hey Faraz Async",(err)=>{})

//Read File : Sync
//const readResult = fs.readFileSync('./contacts.txt', "utf8");
//console.log(readResult);

//append file
fs.appendFileSync('./test.txt',`${Date.now()} Hey there\n`);

//copy file
fs.cpSync('./test.txt','copy.txt');

//delete copyfile
fs.unlinkSync('./copy.txt');