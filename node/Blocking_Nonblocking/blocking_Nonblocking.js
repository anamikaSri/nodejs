// const fs = require("fs")
// fs.writeFileSync("./text.txt", "Hey I am a blocking operation because synchronous operations block the main thread and want resukt right now")
// console.log("Hey I am a blocking operation because synchronous operations block the main thread and want resukt right now")
// console.log(1)

// result = fs.readFileSync("./text.txt", "utf-8")
// console.log("I was a blocking/synchronous read " , result)
// fs.readFile("./text.txt", "utf-8", (err, result) => {

//     console.log(" I am a non blocking / asynchronous read" , result )

// })

// console.log(2)


// OS MODULE
const os = require("os")
console.log(os.cpus().length)

