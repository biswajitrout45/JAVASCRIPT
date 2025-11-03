let arr=[45,55,124,46,58]
function abc(a){
    let sum=0
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(abc(arr))