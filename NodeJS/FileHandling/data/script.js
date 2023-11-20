const { log } = require("console");
let fs = require("fs");
let path=require("path");

let fileName="data3.txt"
let fileName2="data4.txt"

let filePath=path.join(__dirname,fileName);
let filePath2=path.join(__dirname,fileName2);

//write 
// fs.writeFile(
//     filePath2,
//     "Hello world 22",
//     {
//         encoding:"utf-8",
//         flag:"a"
//     },
//     (err)=>{
//         if(err){
//             console.log(err.message);
//         }
//     }
// )

//delete
// fs.rm(
//     filePath,
//     (err)=>{
//         if(err){
//             console.log(err.message);
//         }
//     }
// )

//rename
// fs.rename(
//     filePath,
//     filePath2,
//     (orr)=>{
//         if(orr){
//             console.log(orr.message);
//         }

//     }
// )

//append
// fs.appendFile(
//     filePath,
//     " Aditya Kanswal ",
//     (err2)=>{
//         if(err2){
//             console.log(err2.message);
//         }
//     }
// )

//copy
fs.copyFile(
    filePath,
    filePath2,
    (err3)=>{
        if(err3){
            console.log(err3.message);
        }
    }
)


