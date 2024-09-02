const express = require("express")
const urlRoute = require("./router/url")
const connectToMongodb = require("./connection")


connectToMongodb("mongodb://127.0.0.1:27017/shorturl").then(()=>{console.log("db connection success")}).catch(()=>{console.log("connection not established")})
app = express()
Port = 8080

app.use(express.json({extended : false}))

app.use("/url" , urlRoute)
app.use("/url:id" , urlRoute)


app.listen(Port , ()=>{console.log(`listening at post ${Port}` )})