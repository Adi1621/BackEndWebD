const fs = require("fs");
const path = require("path");

console.log(__dirname);//to check current directory

const filePath = path.join(__dirname, "test.txt");
const filepath = path.join(__dirname, "test2.txt")

// fs.writeFileSync("./test.txt","Hey there");
//sync...
fs.writeFileSync(filePath, "Hey there");

//async...
fs.writeFile(filepath, "Hey there again", (err) => { });

//read file sync
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

//read file async
fs.readFile("./contacts.txt", "utf-8", (err) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
})

//append file sync
fs.appendFileSync("./test.txt", ", My name is Aditya Kanswal");

//delete file sync
fs.unlinkSync("./test2.txt");

//file stats
console.log(fs.statSync("./contacts.txt"));
