const a={
    name:"Biswajit",
    regd:2301297125,
    class:"A"
}
const b={
    name:"Rudra",
    regd:"2301297146",
    class:"B"
}
const c={
    name:"Saurav",
    regd:2301297232,
    class:"C"
}
const array=[a,b,c,"Hiii",230,125,232]
console.log(array)
for(let i=0;i<=3;i++)
{
    array.pop()
}
console.log(array)
array.push("hello","byy")
console.log(array)
for(i=0;i<2;i++)
{   array.shift()
    array.pop()
}
console.log(array)