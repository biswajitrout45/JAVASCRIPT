const swap=(a,b)=>{
    a=a+b
    b=a-b
    a=a-b
    console.log(`After swap value of ${a}`)
    console.log(`After swap value of ${b}`)
}
swap(5,6)
