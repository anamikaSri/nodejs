const express = require("express")
const User = require("../modals/user")
const router = express.Router()

router.get("/", async (req, res) => {
    
    const allusers = await User.find({})
    res.json(allusers)
}).delete("/:id", async (req,res) => {
    
    const deluser = await User.findByIdAndDelete(req.params.id)
    console.log(deluser)
    res.json("deleted")
})

router.get("/:id", async (req, res) => {
    
    console.log(req.params.id)
    const getuser = await User.findById(req.params.id)
    res.json(getuser)
}).patch("/:id", async (req, res) => {
    
    //  filter condition , new content , last one is optional just tell that it has 
    //  to return new data after updating 
    // const update_user = await user.findOneAndReplace({ _id: req.params.id }, req.body, { new: true, returnDocument: 'after' } )
    const update_user = await User.findByIdAndUpdate(req.params.id, req.body)
   
    console.log(update_user)
    res.json("updated")
    
})






router.post("/", async (req, res) => {

    console.log(req.body)
    
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender

   })
    
    // console.log("result" + result)
    res.status(200).json({msg : "success"})

})


module.exports = router