let arr=[15,25,26,45,66,78,11]

function abc(arr,a)
{
    for(i=0;i<arr.length;i++)
    {
    if(arr[i]==a)
    {
        console.log("Present at address"+ i)
        return
    }
    }
        console.log("not present")
}
abc(arr,26)
abc(arr,10)
