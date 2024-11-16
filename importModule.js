
const app=require("./app")

console.log("hiiii"+app.c);


const arr=[1,2,3,4,5,6,7,8,9]

const a=arr.filter((item)=>{
    if(item==4)
        return item
})

console.log(a);
