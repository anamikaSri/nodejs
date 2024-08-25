//  modal view controller
// Controller manipulates model and model updates View

const express = require("express")
const {connectMongoDb} = require("./connection")
const userRouter = require("./routes/user")
const {logReqRes} = require("./middleware")

app = express()


connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")

app.use(express.json({extended : false}));

app.use(logReqRes("log.txt"))
app.use("/user" , userRouter)

app.listen(8000 , ()=>{console.log("Listening")})