function arraysum(arr,index=0){
    if(index>=arr.length){
        return 0;
    }
return arr[index]+arraysum(arr,index+1);
}

function arraysum2(arr){
    if(arr.length===0){
        return 0;
    }
    return arr[0]+arraysum2(arr.slice(1));
}

const number=[45,55,124,46,58];
console.log(arraysum(number));
console.log(arraysum2(number));