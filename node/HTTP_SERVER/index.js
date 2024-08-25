const http = require('http')


// createServer --> will create a server and then 2 parameters inside callback function
//  will deal with request and response
// const server = http.createServer((req, res) => {

//     console.log('Request Recieved ', req.headers)
//     res.end("Hello from server and ending the response")

// })

// server.listen(8000, ()=>console.log("Server started #####"))

//  Assignement : Create a log file everytime a request is recieved by server
//  send response only when log is added

const fs = require("fs")
const server = http.createServer((req, res) => {

    const log = `${Date.now()} : -> ${req.url} //Request recievedn \n`
    fs.appendFile("logs.txt", log, () => {
        console.log("logged info to the file")

        switch (req.url) {
            case "/home": res.end("Home Page")
                break
            case "/about": res.end("I am Anamika")
                break
        }
    }
    )


})

server.listen(8000, () => { console.log("Listening") })

