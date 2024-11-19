console.log("sdfsdfsfg");


//   creating api 
// const server=require("./server")

// const PORT = 600;
// server.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });



//create api using express
// const express = require("express")
// const app = express()

// const data=require("./data.js")

// app.get('/home', (req, res)=> {
//     console.log(req.query.name);

//     res.send(data)
// })

// app.get('/about', (req, res)=> {
//     res.send(`<input type="text" placeholder="user name" value="${req.query.name}"/>
//         <button>Click Me</button> `)
// })

// app.listen(500)



// //  middlewar
// const express = require('express')
// const app = express()

// //  this is aplication middeleware
// const reqFilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send("add age")
//     } else if (req.query.age < 18) {
//         res.send("you can not acces this page")
//     }
//     else {                   
//         next()
//     }
// }

// //  this is how middleware apply on all routs
// app.use(reqFilter)


// app.get('/', (req, res) => {
//     res.send("Welcome to Home page")
// })
// app.get('/user', (req, res) => {
//     res.send("this is user page")
// })

// app.listen(500)


// //  singleroutMiddleware 
// const reqFilter = require('./middleware')  // middleware define in sepret file
// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//     res.send("this is home page")
// })

// // use of routlevel middleware
// app.get('/about',reqFilter, (req, res) => {
//     res.send("this is about page")
// })

// app.listen(550)


// //  grouproutemiddleware
// const express = require('express')
// const app = express()
// const router = express.Router()  // create router using epress

// const reqFilter = require('./middleware')

// router.use(reqFilter)   //  apply reqFilter on router 

// app.get('/', (req, res) => {
//     res.send("this home page")
// })

// // use router at thew plas of app 
// router.get('/about', (req, res) => {   
//     res.send("this about page")
// })

// router.get('/user', (req, res) => {
//     res.send("this user page")
// })

// app.use('/', router) // add router in app
// app.listen(550)

// create event and eventemitter

const express=require('express')
const EventEmitter=require('events')
const app=express()
const event =new EventEmitter()

var count=0

// event callback
event.on('countApi',()=>{
    count++
    console.log('event Called  ', count)
})

app.get('/',(req,res)=>{
    res.send('api called')

    // event trigerde
    event.emit('countApi')
})

app.listen(550)