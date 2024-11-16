//local server create

const http=require('http')

// function a(a){
//     return a*2
// }

//arrow funcation
// const b=(a)=>a*2

// console.log(a(10));
// console.log(b(20));

const dataControl=(req,res)=>{
    res.write("<h1> hello, this is sagar radadiya</h1>")
    res.end()
}

http.createServer(dataControl).listen(4500)