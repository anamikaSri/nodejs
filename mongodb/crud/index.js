// Mongoose is the dependency used for interacting with mongo db 
const mongoose = require("mongoose")
const express = require("express")
// so here in mongoose we have
//  1: SCHEMA -> here we define a structure
//  2: MODEL --> using the schema we create a modal
//  3: CRUD OPERATION : using the model we do CRUD operation

app = express()
app.use(express.json({extended : false}))
// Connection
mongoose.connect('mongodb://127.0.0.1:27017/youtubeapp1').then(() => { console.log("Mongo db connected") }).catch((error=>{console.log(error)}))


//  so first we will create  a SCHEMA
const user_schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type : String 
    },
    email: {
        type: String, 
        required: true,
        unique : true
    },
    jobTitle: {
        type : String
    },
    gender: {
        type : String
    }
} , {timestamps: true})


// creating modal using schema
const user = mongoose.model("user", user_schema);


app.get("/users", async (req, res) => {
    
    const allusers = await user.find({})
    res.json(allusers)
}).delete("/users/:id", async (req,res) => {
    
    const deluser = await user.findByIdAndDelete(req.params.id)
    console.log(deluser)
    res.json("deleted")
})

app.get("/users/:id", async (req, res) => {
    
    console.log(req.params.id)
    const getuser = await user.findById(req.params.id)
    res.json(getuser)
}).patch("/users/:id", async (req, res) => {
    
    //  filter condition , new content , last one is optional just tell that it has 
    //  to return new data after updating 
    // const update_user = await user.findOneAndReplace({ _id: req.params.id }, req.body, { new: true, returnDocument: 'after' } )
    const update_user = await user.findByIdAndUpdate(req.params.id, req.body)
   
    console.log(update_user)
    res.json("updated")
    
})





app.post("/users", async (req, res) => {

    console.log(req.body)
    
    await user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender

   })
    
    // console.log("result" + result)
    res.status(200).json({msg : "success"})

})


app.listen(8000 , ()=>{console.log("Listening")})