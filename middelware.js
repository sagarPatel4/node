const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const app = express()
const PORT = 8000

// Middleware
app.use(express.json())

//middleware 
//use exapmle
app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()} ${req.ip} ${req.method} ${req.path}`, (err, data) => {
        console.log("hello from middleware");
        next()
    })
})

//we can modify req
app.use((req, res, next) => {
    req.myName = "sagar"
    console.log("hello from middleware 2");
    next()
})

//Routes
app.get("/api/users", (req, res) => {

    res.setHeader("X-myName","sagar")  //header add and alway add x in custom header 


    console.log("Dfd", req.myName);   //modified req
    return res.json(users)
})

// //grouping 
// app.route('/api/users/:id').get(
//     (req, res) => {
//         const id = Number(req.params.id)
//         const user = users.find((user) => user.id === id)
//         return res.json(user)
//     }
// ).patch((req, res) => {
//     //edit thr user
//     return res.json({ status: "pending" })
// }).delete(
//     (req, res) => {
//         //delete the user
//         return res.json({ status: "pending" })
//     }
// )

app.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id == id)
    return res.json(user)
})

app.post("/api/users", (req, res) => {
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {

        return res.json({ status: "Success", id: users.length })
    })

})
app.patch("/api/users/:id", (req, res) => {
    //edit the user
    return res.json({ status: "pending" })
})
app.delete("/api/users/:id", (req, res) => {
    //delete the user
    return res.json({ status: "pending" })
})

app.listen(PORT, () => console.log("Server start at port 8000"));
