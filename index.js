const express = require("express")

const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middelwares")

const userRouter = require("./routes/user")

const app = express()
const PORT = 8000

//Connection
connectMongoDb("mongodb://localhost:27017/youtube-app-1")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error", err))


// Middleware
app.use(express.json())
app.use(logReqRes("log.txt"))

//Routes
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log("Server start at port 8000"));
