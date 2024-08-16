//  https://www.google.com/search?q=google&rlz=1C1GCEU_enIN1080IN1080&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMgwIAhAjGCcYgAQYigUyDAgDECMYJxiABBiKBTIGCAQQRRg8MgYIBRAFGEAyBggGEEUYPDIGCAcQRRg80gEIMTE3MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8
//  here https -> protocol
//  www.google.com -> is domain name
// /search-> is path
// ?q=google&rlz=1C1GCEU_enIN1080IN1080&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMgwIAhAjGCcYgAQYigUyDAgDECMYJxiABBiKBTIGCAQQRRg8MgYIBRAFGEAyBggGEEUYPDIGCAcQRRg80gEIMTE3MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8 --> is a query parameters everything after ?


//  so normally http is not able to parse the url and sinf out
//  path , domain_name etc separately , so we use a external library for that


//  we can istall it by writing npm install url
//  this will add a dependency of url to our package.json and at the same time 
//  it will add node_module folder which contains code for exteral library url


const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req, res) => {

    const Myurl = url.parse(req.url, true)
    const timestamp = new Date();
    console.log(timestamp.toString()); // Full date and time string

    const log = `${timestamp.toString()} : ${Myurl.pathname} : ${req.method} : New Request \n`
    if (req.url == "/favicon.ico") return res.end()
    fs.appendFile("./log.txt", log, (msg) => {
        console.log("logs added")
        console.log(Myurl)
        switch (Myurl.pathname) {
            case "/home":
                msg = Myurl.query.name
                console.log(msg)
                res.end("Hello I am " + `${msg}`)
                break
            case "/about": res.end("Hello I am about")
                break
        }
    })

})

server.listen(8000, () => { console.log("listening") })