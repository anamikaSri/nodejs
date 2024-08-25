const express = require("express")
// const http = require("http")


// so we can create a server and then we give a request handler to server
// express provides and handler app which can handle http methods
//  the methods provided by URL external library is also built in

// const server = http.createServer(app)

// syntax for express is app.method("path" , "handler_method")
const app = express()
app.get("/", (req, res) => {
    return res.send(`Hello ${req.query.name}`)
})

app.get("/about", (req, res) => {
    return res.send("Hello from About page")
})


// so this is internally using http module only --> for 
// creating a server and making it listen to port 8000
app.listen(8080 , ()=>{console.log("listening")})