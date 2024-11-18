const http=require('http');
const data=require("./data.js")

const { json } = require('stream/consumers');

const server= http.createServer((req,res)=>{
console.log("hiiii from server");
res.writeHead(200,{'contant-Type':'application\json'})
res.write(JSON.stringify(data))
res.end()
})

module.exports=server
