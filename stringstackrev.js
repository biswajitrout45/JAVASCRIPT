function rev(b){
    let a=[];
    let c="";
    for(i=0;i<b.length;i++)
    {
        a.push(b[i])
    }
    for(i=0;i<b.length;i++)
    {   
        c=c+a.pop()
    }
    return c
}
console.log(rev("Biswajit"))