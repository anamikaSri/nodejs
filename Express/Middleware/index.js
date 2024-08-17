const express = require("express")

const app = express();



app.use(express.json({ extended: false }))

// middleware can infact make changes to req and res objects as well 
app.use((req,res,next) => {
    // so this is our middleware 
    req.skill = "java"
    // we can even set custome headers
    res.setHeader("Myname" , "Anamika")
    


    console.log("request body from middleware", req.body)
    //  this is the next function which we need to call to ensure 
    //  that the next middleware is called if present or else request is send to the route 
    next()
})

app.route("/users").get((req, res) => {
    console.log("here is the list of users")
}).post((req, res) => {
    console.log(req.skill)
    console.log("req body from route" , req.body)
    return res.end()
})


app.listen(8000, () => { console.log("listening") })