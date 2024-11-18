
const app=require("./app")

const v=app.c
console.log(v());


const arr=[1,2,3,4,5,6,7,8,9]

const a=arr.filter((item)=>{
    if(item==4)
        return item
})

console.log(a);

