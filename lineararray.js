let arr=[15,25,26,45,66,78,11]

x=78
y=10
for(i=0;i<=arr.length;i++)
{
    if(arr[i]==x)
    {
        console.log("Present at address"+ i)
        break;
    }
    else{
        continue;
    }
}
for(i=0;i<=arr.length;i++)
{
    if(arr[i]==y)
    {
        console.log("Present at address"+ i)
        break;
    }
    else if(i<arr.length){
        continue;
    }
    else{
        console.log("Not present")
    }
}