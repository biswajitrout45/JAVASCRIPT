function secondlarg(arr){
    let temp=0,temp2=0
    for(i=0;i<arr.length;i++)
    {
        if(temp<=arr[i])
        {
            temp=arr[i]
        }
    }
    for(i=0;i<arr.length;i++)
    {
        if(temp2<arr[i] && arr[i]!=temp)
        {
            temp2=arr[i]
        }
    } 
    return temp2  
}
console.log(secondlarg([12,35,1,10,34,1]))