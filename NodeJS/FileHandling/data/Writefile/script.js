let fs = require("fs");
let path = require("path");

let fileName = "data3.txt"
let file2="data4.txt"

// console.log(__dirname);

let filePath = path.join(__dirname, file2);

// fs.writeFile(
//     filePath,
//     "Hello world again .....!!",
//     {
//         encoding: "utf-8",
//         flag: "w"
//     },
//     (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//     }
// )

// let add = path.join(__dirname, fileName);

fs.rmdir(
    filePath,
    {
        force: false
    },
    (err) => {
        if (err) {
            
            console.log(err.message);
        }
    }
)