function fact(a){
    let temp=1;
    for(let i=a;i>=1;i--){
        temp=temp*i
    }
    console.log(temp)
}
fact(5)
function factorial(n){
    if(n===0||n===1){
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(5))
