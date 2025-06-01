// Node.js Basics:
// Introduction to Node.js
// Installing Node.js and npm
// working with node & npm
// npm init
// node basic usage
// Working with modules
// File system operations
// understanding HTTP module

/*
node.js is not a programming language
not a technology
not a framework
not a library
node.js is the javascript runtime environment

Story: Javascript sa backend nhi ban skta kuka js ka pass wo functionalities hi nai han jis sa backend banta hy
Ryan Dahl: isne socha js se backend banna chaye hy
google chrome ka v8 engine ka code open source hy & rayn dhal us code main changes kr rha hy. fir us na socha jumy to js ma code krna hai kuke chrome ka v8 engine bana hai c++ ma
hum js ka code likhain ga jo ki wrapper layer of js receive karegi and wo code v8 engine ke c++ modules ka satth ek server create krega
node.js is a js runtime environment
*/

const fs = require("fs");

fs.writeFile("hey.txt", "hello, how are you ?", (err) => {
  if (err) console.error(err);
  else console.log("done");
});

fs.appendFile("hey.txt", " I am fine", (err) => {
  if (err) console.error(err);
  else console.log("done");
});

fs.rename("hey.txt", "hello.txt", (err) => {
  if (err) console.error(err);
  else console.log("done");
});

fs.copyFile("hello.txt", "./copy/copy.txt", (err) => {
  if (err) console.error(err.message);
  else console.log("done");
});

fs.unlink("hello.txt", function (err) {
  if (err) console.error(err.message);
  else console.log("removed");
});

fs.rm("./copy", { recursive: true }, function (err) {
  if (err) console.error(err.message);
  else console.log("directory removed");
});

fs.readFile("/etc/passwd", "utf-8", (err, data) => {
  if (err) console.error(err.message);
  console.log(data);
});

// protocol - rules
// internet pr kuch bhi krny ka liya rules banay gay han un ki taraf sa jinhone ne network bnaya hy, ab un rules ko follow krna dazuri ha or ya rules follow hon is lya ya rules ap ka operating system ka software ma pre-installed aty hai

// http - protocol
// yahi protocol hai ya rule hy jisko follow kiya bina app internet pa naa hi kuch baj skty hon na hi kuch manga skte ho

const http = require("http");
const server = http.createServer(function (req, res) {
  res.end("Hello World");
});
server.listen(3000);
