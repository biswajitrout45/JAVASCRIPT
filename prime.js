var num=12
let count=0
if(i<=1)
{
    console.log("It is not a prime number")
}
else{
for(var i=2;i<=num/2;i++)
{
    if(num%i==0)
    {
        count++
        break;
    }
}
if(count==0)
{
    console.log("It is a prime number")
}
else{
    console.log("It is not a prime number")
}
}