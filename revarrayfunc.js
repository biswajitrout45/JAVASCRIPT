function reverse(arr){
    let a=0,b=arr.length-1
    while(a<b)
    {
        [arr[a],arr[b]]=[arr[b],arr[a]]
        a++
        b--
    }
    return arr;
}
console.log(reverse([1,2,1,4,2,6,3,7]))