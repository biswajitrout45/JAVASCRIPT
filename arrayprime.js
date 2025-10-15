var num=[19,17,2222,14,21,11,5];
let count=0
for(let j=0;j<num.length;j++)
{
if(num[j]<=1)
{
    console.log("It is not a prime number")
}
else
{
    for(var i=2;i<=Math.sqrt(num[j]);i++)
    {
        if(num[j]%i==0)
        {
            count++
            break;
        }
    }
    if(count==0)
    {
        console.log("True")
    }
    else{
        console.log("False")
    }
}}