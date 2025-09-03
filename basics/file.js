//file handling in node js

import fs from 'fs';              // module JS
// const fs = require('fs');     // common JS



//creating a file

//Synchronous call
// fs.writeFileSync('./test.txt','hey there!'); 
//location,content to be written

//Asynchronous call
// fs.writeFile('./test.txt','async file created',(err)=>{});
//location,content to be written,error handling


//reading a file

//Synchronous call
// const contact = fs.readFileSync('./contact.txt','utf-8')
// location,encoding format as our file could be binary,audio,video,txt

//Asynchronous call
// fs.readFile('./contact.txt','utf-8',(err,data)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })
//in asynchronous it always expects a callback as the value is not returned instantly.


//appending in a file
// fs.appendFileSync('./test.txt',`\n text is been appended`)

//copying file contents into another new file
// fs.cpSync('./test.txt','./copy.txt')

//deleting a file 
// fs.unlinkSync('./copy.txt')

//to get statistics of file
// console.log(fs.statSync('./test.txt'))

//making a directory
// fs.mkdirSync('my-docs')
