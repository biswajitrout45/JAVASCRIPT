function fibb(a){
    let b=0,c=1;
    console.log(b,c)
    for(i=2;i<=a;i++)
    {
        d=b+c;
        console.log(d);
        b=c
        c=d
    }
}
fibb(4)