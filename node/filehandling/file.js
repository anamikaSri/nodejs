// FILE HANDELING IS NOT PRESENT IN NORMAL JS IT IS ADDED TO NODEJS 

// creation and reading of file
// fs in an inbuilt function that can be used for file handling

const fs = require("fs")


//  this was a synchronous function : which creates and write the file
fs.writeFileSync('./test.txt', "This is synchronous ")


// Asynchronous function
// fs.writeFile('./test.txt', "This is asynchronous", (error) => { console.log("this is callback") })


// now like wise there is a function to readfile
//  this one is synchronous and it returns back the result immediately after processing the text
const result = fs.readFileSync('./test.txt', "utf-8")
console.log(result)

// but in case of asynchronous it requires an callback to print the result
// it doesn't return anything so we need to give a callback

//  this is asycnhronous way of reading a file
fs.readFile('./test.txt', "utf-8", (error, result) => {
    if (error)
    {
        console.log(error)
    } else {
        console.log(result)
    }

})


// appending text at the end of the file
fs.appendFileSync("./test.txt", new Date().getDate().toString())

// copying a file
fs.cpSync('./test.txt', "./copy.txt")


// delete a file
fs.unlinkSync('./copy.txt')


// stat of a file
console.log(fs.statSync("./test.txt"))

// mkdir

fs.mkdirSync("files")