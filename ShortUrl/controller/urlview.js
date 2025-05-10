const URL = require('../models/url')
async function getUrls(req, res) {
    console.log("here i am");
    const urls = await URL.find();
    console.log("urls" + urls);
    (urls).forEach(url => {
        console.log(url.shortUrl);
    })
    return res.render("viewurls", { urls:urls });
}

module.exports={
    getUrls
}