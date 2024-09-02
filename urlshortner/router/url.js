const express = require("express")
const router = express.Router()
const {Handler_generateNewShortUrl , HandlerOpenUrl} = require("../controllers/url")




router.post("/" , Handler_generateNewShortUrl)

router.get("/:id" , HandlerOpenUrl)
console.log("here in router")


module.exports = router;
