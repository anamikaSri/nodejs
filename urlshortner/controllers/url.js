
const shortid = require("shortid")

// here in ..modals/url this url stands for file
// url.js
const URL = require("../modals/url")
const data = {}

async function Handler_generateNewShortUrl(req , res) {

    const body = req.body

    if(!body.url) return res.status(400).json({"error"  : "Url is required"})
    const shortId = shortid()
    await URL.create({
        shortUrl : shortId,
        redirectUrl : body.url,
        visitHistory : []
    })
    return res.json({link : `http:anamika.ly/${shortId}`})
}

async function HandlerOpenUrl(req,res) {
    
    const shortId = req.params.id
    const now = new Date()
    const data = await URL.findOneAndUpdate(
    
        {shortUrl:shortId} , {$push : {
            visitHistory : {timestamp : now.toLocaleString()}
        }}
    
    )
    console.log("data is " + data.redirectUrl)
    return res.redirect(data.redirectUrl)
}





module.exports = {
    Handler_generateNewShortUrl ,
    HandlerOpenUrl
}


