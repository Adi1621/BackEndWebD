const fs = require("fs");
const path = require("path");

console.log(__dirname);
const filePath = path.join(__dirname, "test.txt");

// fs.writeFileSync("./test.txt","Hey there");
fs.writeFileSync(filePath, "Hey there");
