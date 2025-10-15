function isprime(a){
    let count=0
    if(a<2)
    {
        return false;
    }
    else{
    for(var i=2;i<=Math.sqrt(a);i++)
    {
        if(a%i==0)
        {
            count++
            break;
        }
    }
    if(count==0)
    {
        return true;
    }
    else{
        return false;
    }
}
}
console.log(isprime(3))