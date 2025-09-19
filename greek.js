// Write JavaScript code
const fs = require("fs");
const filedata = fs.readFileSync('inputfile1.txt');
console.log(filedata.toString());
console.log("End of Program execution");