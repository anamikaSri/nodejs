// we have used nodemon so that we don't need to restart the
// server everytime , it can detect the changes and do it itself

const express = require("express")

const app = express()

app.get("/users", (req, res) => {
    
    console.log("Anamika")
    
})


app.post('/users', (req, res) => {
    
    console.log("Created");
    res.status(201).send("Created sucessfully")
})

app.listen(8000, () => { console.log("listening") })