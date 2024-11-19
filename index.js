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


// load htm page using express
// const express=require('express')
// const path=require('path')

// const app=express()
// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath))

// app.listen(500)


// // remove extension from url using sendfile
// const express = require('express')
// const path = require('path')

// const app = express()
// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath))

// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/home',(req,res)=>{
//     res.sendFile(`${publicPath}/home.html`)
// })

// // show 404 error 
// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/noPage.html`)
// })
// app.listen(500)