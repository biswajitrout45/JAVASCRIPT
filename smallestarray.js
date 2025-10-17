function small(arr)
    {
        let temp=arr[0]  
        for(i=0;i<arr.length;i++)
        {
            if(temp>=arr[i])
            {
                temp=arr[i]
            }
        }  
        return temp
    }
console.log(small([10,20,4,556,4891,1,12,46]))