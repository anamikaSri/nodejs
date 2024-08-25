const express = require("express")
const data = require("./MOCK_DATA.json")
const app = express()
const port = 8000
const fs = require("fs")



//  we will apply a plugin which will enable communication between express and postman
// 1 : Postman Sends Request: JSON data is sent to the server.
// 2 : Server Receives Request: The server receives the request.
// 3:  Middleware Parses:
//       express.json() middleware parses the JSON body.
//       Converts the JSON { "name": "Anamika" } into a JavaScript object { name: 'Anamika' }.
// Output: req.body is { name: 'Anamika' }, so the console output is { name: 'Anamika' }.
app.use(express.json({ extended: false }))

//  get all users data : accessible by browsers
app.get("/users", (req, res) => {
    const html = `
     <ul>
        ${data.map((val) => { return `<li>${val.first_name}</li>` }).join("")}
     </ul>
    
    `
    res.send(html)
})

//  get all users data : accessible by mobile and other devices 
app.get("/api/users", (req, res) => {
    console.log(req)
    res.json(data)
})

// :id stands for dynamic number
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const user = data.find((val) => val.id === id)
//     res.json(user)

// })
// app.patch("/api/users/:id", (res, req) => {
//     res.json({ status: "pending" })
// })

// app.delete("/api/users/:id", (req, res) => {
//     res.json({ status: "pending" })
// })

//  we can combine above 3 into 1

//  for getting, updating and deleting by perticular id 
app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id)
    const user = data.find((val) => val.id === id)
    res.json(user)

}).patch((req, res) => {
    const id = Number(req.params.id)
    // here we are using ... because it will also
    //  perform union and update so if anything is 
    //  suppose data = { id: 1, name: "Anamika", age: 22, study: "mtech" } and reqBody = { age: 23, study: "phd" };
    //  result will be // Output: { id: 1, name: "Anamika", age: 23, study: "phd" }
    data[id-1] = { ...data[id-1], ...req.body }  
   
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (error)=>{
        if (error)
        {
            return res.json({ status: "pending" })
        } 

        return res.json({ status: "updated " })
    })   

}).delete((req, res) => {
    const id = Number(req.params.id)
    const newdata = data.filter((val) => val.id != id)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newdata), (error) => {
        if (error) {
            return res.json({ status: "pending" })
        }
        return res.json("Removed ")
    }
    )

})


// for updating a user 
app.post("/api/users", (req, res) => {
    const body = req.body
    data.push(body)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (error) => {
        if (error) {
            return res.json({ status: "pending" })
        }
        return res.json("Added")

    })

})





app.listen(8000, () => { console.log("Listening") })