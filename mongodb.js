const express = require("express")
const fs = require("fs")
const mongoose = require("mongoose")


const app = express()
const PORT = 8000

//Connection
mongoose.connect('mongodb://localhost:27017/youtube-app-1')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error", err))

//Schema 
const userSchema = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    ipAddress: {
        type: String
    },
    gender: {
        type: String,
        required: true
    }
},{timestamps:true})

const User = mongoose.model("user", userSchema)

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

app.get("/api/users",async (req, res) => {

    const allUsers=await User.find({})

    res.setHeader("X-myName", "sagar")  //header add and alway add x in custom header 
    console.log("Dfd", req.myName);
    return res.json(allUsers)
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

app.get("/api/users/:id",async (req, res) => {
    const user=await User.findById(req.params.id)
    return res.json(user)
})

app.post("/api/users", async(req, res) => {

    const body = req.body
    if(!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.ip_address) {
        return res.json({msg :"All fields are req...."})
    }

    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        ipAddress:body.ip_address,
    })

    
return res.status(201).json({msg:"Success"})
})

app.patch("/api/users/:id", async(req, res) => {
    //edit the user
    console.log(req.params.id);
    
    await User.findByIdAndUpdate(req.params.id,{
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email,
        gender:req.body.gender,
        ipAddress:req.body.ip_address,
    })
    return res.json({ status: "Success", user: req.body})
})

app.delete("/api/users/:id", async(req, res) => {
    //delete the user
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })
})

app.listen(PORT, () => console.log("Server start at port 8000"));
